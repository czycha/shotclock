import { LeagueBoxScore, LeagueBoxScoreTeam, LeagueBoxScoreTeamPlayer } from '../../league-types'
import { BoxScore, Leaders, Player, Status, TeamBoxScore } from '../../types'

function toPlayer (data: LeagueBoxScoreTeamPlayer): Player {
  return {
    id: String(data.pid),
    first: data.fn,
    last: data.ln,
    position: data.pos,
    minutes: data.min,
    seconds: data.sec,
    points: data.pts,
    fgm: data.fgm,
    fga: data.fga,
    ftm: data.ftm,
    fta: data.fta,
    tpm: data.tpm,
    tpa: data.tpa,
    offensiveRebounds: data.oreb,
    defensiveRebounds: data.dreb,
    rebounds: data.reb,
    assists: data.ast,
    fouls: data.pf,
    steals: data.stl,
    turnovers: data.tov,
    blocks: data.blk,
    plusMinus: data.pm
  }
}

function toTeamBoxScore (data: LeagueBoxScoreTeam): TeamBoxScore {
  const ret: TeamBoxScore = {
    id: String(data.tid),
    abbr: data.ta,
    nickname: data.tn,
    location: data.tc,
    score: data.s,
    leaders: {
      points: {
        count: 0,
        value: 0,
        players: []
      },
      assists: {
        count: 0,
        value: 0,
        players: []
      },
      rebounds: {
        count: 0,
        value: 0,
        players: []
      }
    },
    players: [],
    stats: {
      points: data.s,
      fgm: data.tstsg.fgm,
      fga: data.tstsg.fga,
      ftm: data.tstsg.ftm,
      fta: data.tstsg.fta,
      tpm: data.tstsg.tpm,
      tpa: data.tstsg.tpa,
      offensiveRebounds: data.tstsg.oreb,
      defensiveRebounds: data.tstsg.dreb,
      rebounds: data.tstsg.reb,
      assists: data.tstsg.ast,
      steals: data.tstsg.stl,
      turnovers: data.tstsg.tov,
      blocks: data.tstsg.blk,
      technicalFouls: data.tstsg.tf
    }
  }
  const stats = ['points', 'assists', 'rebounds'] as const
  for (const p of data.pstsg) {
    const player = toPlayer(p)
    ret.players.push(player)
    for (const stat of stats) {
      const leader = ret.leaders[stat] as Leaders
      if (player[stat] > leader.value) {
        leader.count = 1
        leader.value = player[stat]
        leader.players = [player.id]
      } else if (leader.value > 0 && player[stat] === leader.value) {
        leader.count++
        leader.players.push(player.id)
      }
    }
  }
  for (const stat of stats) {
    if ((ret.leaders[stat] as Leaders).count === 0) {
      ret.leaders[stat] = undefined
    }
  }
  return ret
}

export function toBoxScore (data: LeagueBoxScore): BoxScore {
  return {
    status: String(data.g.st) as Status,
    clock: data.g.cl,
    quarter: String(data.g.p),
    teams: {
      home: toTeamBoxScore(data.g.hls),
      visitor: toTeamBoxScore(data.g.vls)
    }
  }
}
