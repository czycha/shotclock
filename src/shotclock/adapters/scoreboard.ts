import { DateTime } from 'luxon'

import { LeagueScoreboardGame, LeagueScoreboardGameBroadcaster, LeagueScoreboardGameTeam } from '../../league-types'
import { Broadcaster, Broadcasters, Scoreboard, Team } from '../../types'

function toTeam (t: LeagueScoreboardGameTeam): Team {
  return {
    id: String(t.tid),
    abbr: t.ta,
    nickname: t.tn,
    location: t.tc,
    score: +t.s,
    record: t.re
  }
}

function toBroadcasters (b: LeagueScoreboardGameBroadcaster[]): Broadcasters {
  const ret: Broadcasters = { tv: [], radio: [] }
  for (const bee of b) {
    if ((bee.scope !== 'natl' && bee.scope !== 'home' && bee.scope !== 'away') || (bee.type !== 'tv' && bee.type !== 'radio')) {
      continue
    }
    const broadcaster: Broadcaster = {
      scope: bee.scope === 'away' || bee.scope === 'home' ? 'local' : bee.scope,
      team: bee.scope === 'away'
        ? 'visitor'
        : bee.scope === 'home'
          ? 'home'
          : 'none',
      language: bee.lan,
      display: bee.disp
    }
    ret[bee.type].push(broadcaster)
  }
  return ret
}

export function toScoreboard (data: LeagueScoreboardGame): Scoreboard {
  return {
    id: String(data.gid),
    status: data.st,
    date: data.gdte.replace(/-/g, ''),
    time: data.etm.slice(11, 16).replace(/:/g, ''),
    dateTime: DateTime.fromISO(data.etm, { zone: 'America/New_York' }),
    teams: {
      home: toTeam(data.h),
      visitor: toTeam(data.v)
    },
    broadcasters: toBroadcasters(data.bd.b)
  }
}
