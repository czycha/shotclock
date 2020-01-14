import { Shotclock, Cached, Scoreboard } from '../src'
import * as NBACompare from './compare/nba'
import * as WNBACompare from './compare/wnba'

let nba = new Shotclock('nba', 'timberwolves', '0021800043', '20181022')
const wnba = new Shotclock('wnba', 'lynx', '1021900044', '20190616')

describe('Shotclock', () => {
  beforeEach(() => {
    nba = new Shotclock('nba', 'timberwolves', '0021800043', '20181022')
  })
  describe('Cache', () => {
    test('empty', () => {
      expect(nba.latest('scoreboard')).toBeUndefined()
    })
    test('filled', async () => {
      const scoreboard = await nba.scoreboard()
      const cached = nba.latest('scoreboard') as Cached<Scoreboard>
      expect(cached).toBeDefined()
      expect(cached.data).toEqual(scoreboard)
      expect(cached.fetched).toEqual(expect.any(Date))
    })
  })
})

describe('NBA', () => {
  test('Scoreboard', async () => {
    const scoreboard = await nba.scoreboard()
    expect(scoreboard).toEqual(NBACompare.scoreboard)
  })
  test('Play-By-Play', async () => {
    const pbp = await nba.playByPlay()
    expect(pbp).toEqual(NBACompare.playByPlay)
  })
  test('Boxscore', async () => {
    const boxscore = await nba.boxscore()
    expect(boxscore).toEqual(NBACompare.boxscore)
  })
})

describe('WNBA', () => {
  test('Scoreboard', async () => {
    const scoreboard = await wnba.scoreboard()
    expect(scoreboard).toEqual(WNBACompare.scoreboard)
  })
  test('Play-By-Play', async () => {
    const pbp = await wnba.playByPlay()
    expect(pbp).toEqual(WNBACompare.playByPlay)
  })
  test('Boxscore', async () => {
    const boxscore = await wnba.boxscore()
    expect(boxscore).toEqual(WNBACompare.boxscore)
  })
})
