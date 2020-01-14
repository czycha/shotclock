import axios, { AxiosInstance } from 'axios'
import { DateTime, Interval } from 'luxon'
import settle from 'p-settle'
import { Class } from 'type-fest'

import { Check, CheckListener, Requirement } from '../check/all'
import { LeagueBoxScore, LeaguePlayByPlay, LeagueScoreboard } from '../league-types'
import { BoxScore, PlayByPlay, Scoreboard, Status } from '../types'
import * as Adapt from './adapters'

export function ensureDateString (date: string | Date | DateTime): string {
  if (typeof date === 'string') {
    return date
  } else {
    const when = date instanceof Date ? DateTime.fromJSDate(date) : date
    return when.toFormat('yyyyMMdd')
  }
}

export function getNBASeason (date: string | Date | DateTime = new Date()): number {
  const formatted = ensureDateString(date)
  const month = +formatted.slice(4, 6)
  const year = formatted.slice(0, 4)
  if (month < 8) {
    return (+year) - 1
  } else {
    return +year
  }
}

export interface Cached<T> {
  data: T;
  fetched: Date;
}
interface Cache {
  scoreboard?: Cached<Scoreboard>;
  playByPlay?: Cached<PlayByPlay>;
  boxscore?: Cached<BoxScore>;
}

export type League = 'wnba' | 'nba'

export class Shotclock {
  public checks: Set<Check<any>> = new Set()
  public gid: string
  public date: string
  public cached: Cache = {}
  public status?: Status
  public team: string;

  protected request: AxiosInstance
  protected year: string
  protected league: League
  protected timeout?: NodeJS.Timeout
  protected interval?: NodeJS.Timeout

  public constructor (league: League, team: string, gid: string, date: Date | string = new Date()) {
    this.league = league
    this.team = team
    this.gid = gid
    this.date = ensureDateString(date)
    if (this.league === 'wnba') {
      this.year = this.date.slice(0, 4)
    } else {
      this.year = String(getNBASeason(date))
    }
    this.request = axios.create({
      baseURL: `https://data.${this.league}.com/data/5s/v2015/json/mobile_teams/${this.league}/${this.year}`,
      timeout: 10000
    })
  }

  public cache<T extends Requirement> (type: T, data: NonNullable<Cache[T]>['data']): void {
    this.cached[type] = {
      data,
      fetched: new Date()
    } as NonNullable<Cache[T]>
  }

  public latest<T extends keyof Cache> (type: T): Cache[T] {
    return this.cached[type]
  }

  public use<T> (check: Class<Check<T>> | Check<T>, listeners?: CheckListener<T> | CheckListener<T>[]) {
    const c: Check<T> = check instanceof Check ? check : new check() // eslint-disable-line new-cap
    if (listeners != null) {
      if (Array.isArray(listeners)) {
        for (const listener of listeners) {
          c.listen(listener)
        }
      } else {
        c.listen(listeners)
      }
    }
    this.checks.add(c)
    return this
  }

  public remove<T> (c: Check<T>) {
    this.checks.delete(c)
  }

  // https://data.wnba.com/data/5s/v2015/json/mobile_teams/wnba/2018/teams/lynx_schedule.json
  public async scoreboard (): Promise<Scoreboard | undefined> {
    const { data } = await this.request.get<LeagueScoreboard>(`/teams/${this.team}_schedule.json`)
    if (data != null) {
      const game = data.gscd.g.find(({ gid }) => gid === this.gid)
      if (game != null) {
        const scoreboard = Adapt.toScoreboard(game)
        this.cache('scoreboard', scoreboard)
        return scoreboard
      }
    }
  }

  // https://data.wnba.com/data/5s/v2015/json/mobile_teams/wnba/2018/scores/gamedetail/1021800088_gamedetail.json
  public async boxscore (): Promise<BoxScore | undefined> {
    const { data } = await this.request.get<LeagueBoxScore>(`/scores/gamedetail/${this.gid}_gamedetail.json`)
    if (data != null) {
      const boxscore = Adapt.toBoxScore(data)
      this.cache('boxscore', boxscore)
      return boxscore
    }
  }

  // https://data.wnba.com/data/5s/v2015/json/mobile_teams/wnba/2018/scores/pbp/1021800088_full_pbp.json
  public async playByPlay (): Promise<PlayByPlay | undefined> {
    const { data } = await this.request.get<LeaguePlayByPlay>(`/scores/pbp/${this.gid}_full_pbp.json`)
    if (data != null) {
      const pbp = Adapt.toPlayByPlay(data)
      this.cache('playByPlay', pbp)
      return pbp
    }
  }

  public createInterval () {
    return setInterval(() => { this.check() }, 10000)
  }

  public async check () {
    const checks = this.checks
    if (checks.size === 0) {
      return Promise.resolve(false)
    }

    const requirements: Set<Requirement> = new Set()
    checks.forEach((check) => {
      if (Array.isArray(check.requires)) {
        for (const req of check.requires) {
          requirements.add(req)
        }
      } else {
        requirements.add(check.requires)
      }
    })

    // console.log('Checking...')
    const [scoreboard, boxscore, pbp] = await settle<Scoreboard | BoxScore | PlayByPlay | undefined | false>([
      requirements.has('scoreboard') && this.scoreboard(),
      requirements.has('boxscore') && this.boxscore(),
      requirements.has('playByPlay') && this.playByPlay()
    ])
    // console.log('Checked!')

    checks.forEach((check) => {
      const reqs = Array.isArray(check.requires) ? check.requires : [check.requires]
      const args: (Scoreboard | BoxScore | PlayByPlay | undefined)[] = []
      for (const req of reqs) {
        switch (req) {
          case 'scoreboard':
            args.push(scoreboard.isRejected ? undefined : (scoreboard.value || undefined))
            break
          case 'boxscore':
            args.push(boxscore.isRejected ? undefined : (boxscore.value || undefined))
            break
          case 'playByPlay':
            args.push(pbp.isRejected ? undefined : (pbp.value || undefined))
            break
        }
      }
      // console.log(reqs, args, check)
      check.check(args)
    })
  }

  public waitUntilGame ({ date, time }: { date: string; time: string }, fn: () => void) {
    const dt = DateTime.fromFormat(`${date} ${time}`, 'yyyyMMdd HHmm', { zone: 'America/New_York' })
    const interval = Interval.fromDateTimes(DateTime.local(), dt)
    if (interval.isValid) {
      const duration = interval.length('milliseconds')
      return setTimeout(fn, duration)
    } else {
      // Past scheduled start
      fn()
    }
  }

  public async watch () {
    const game = await this.scoreboard()
    if (game == null) {
      throw new Error('Unable to retrieve scoreboard')
    }
    switch (game.status) {
      case Status.pregame:
        this.timeout = this.waitUntilGame(game, () => {
          this.check()
          this.interval = this.createInterval()
        })
        break
      case Status.midgame:
        this.check()
        this.interval = this.createInterval()
        break
      case Status.postgame:
        this.check()
        break
    }
  }

  public clearTimeout () {
    if (this.timeout != null) clearTimeout(this.timeout)
    delete this.timeout
  }

  public clearInterval () {
    if (this.interval != null) clearInterval(this.interval)
    delete this.interval
  }

  public stop () {
    this.clearTimeout()
    this.clearInterval()
  }
}
