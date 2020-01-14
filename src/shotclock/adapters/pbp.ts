import { LeaguePlay, LeaguePlayByPlay } from '../../league-types'
import { Play, PlayByPlay } from '../../types'

function toPlay (pla: LeaguePlay, period: number): Play {
  return {
    event: pla.evt,
    clock: pla.cl,
    description: pla.de,
    home: pla.hs,
    visitor: pla.vs,
    period
  }
}

export function toPlayByPlay (data: LeaguePlayByPlay): PlayByPlay {
  const ret: PlayByPlay = { plays: [] }
  for (const pd of data.g.pd) {
    const period = pd.p
    for (const pla of pd.pla) {
      ret.plays.push(toPlay(pla, period))
    }
  }
  return ret
}
