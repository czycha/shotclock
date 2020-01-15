import { DateTime } from 'luxon'

import { BoxScore, PlayByPlay, Scoreboard, Status } from '../../src/types'

export const scoreboard: Scoreboard = {
  id: '0021800043',
  status: Status.postgame,
  date: '20181022',
  time: '2000',
  dateTime: DateTime.fromISO('2018-10-22T20:00:00', { zone: 'America/New_York' }),
  broadcasters: {
    tv: [
      {
        scope: 'local',
        team: 'home',
        display: 'Fox Sports North',
        language: 'English'
      },
      {
        scope: 'local',
        team: 'visitor',
        display: 'Fox Sports Indiana',
        language: 'English'
      }
    ],
    radio: [
      {
        scope: 'local',
        team: 'home',
        display: '830 WCCO',
        language: 'English'
      },
      {
        scope: 'local',
        team: 'visitor',
        display: '1070 The Fan/107.5 FM',
        language: 'English'
      }
    ]
  },
  teams: {
    home: {
      id: '1610612750',
      abbr: 'MIN',
      location: 'Minnesota',
      nickname: 'Timberwolves',
      record: '2-2',
      score: 101
    },
    visitor: {
      id: '1610612754',
      abbr: 'IND',
      location: 'Indiana',
      nickname: 'Pacers',
      record: '2-2',
      score: 91
    }
  }
}

export const boxscore: BoxScore = {
  status: Status.postgame,
  clock: '00:00.0',
  quarter: '4',
  teams: {
    home: {
      id: '1610612750',
      abbr: 'MIN',
      nickname: 'Timberwolves',
      location: 'Minnesota',
      score: 101,
      leaders: {
        points: {
          count: 1,
          value: 20,
          players: ['202710']
        },
        assists: {
          count: 1,
          value: 10,
          players: ['201952']
        },
        rebounds: {
          count: 1,
          value: 15,
          players: ['1626157']
        }
      },
      players: [{
        id: '203952',
        first: 'Andrew',
        last: 'Wiggins',
        position: 'SF',
        minutes: 8,
        seconds: 5,
        points: 2,
        fgm: 1,
        fga: 3,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 1,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 1,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 2
      }, {
        id: '201959',
        first: 'Taj',
        last: 'Gibson',
        position: 'PF',
        minutes: 32,
        seconds: 39,
        points: 13,
        fgm: 6,
        fga: 7,
        ftm: 0,
        fta: 0,
        tpm: 1,
        tpa: 1,
        offensiveRebounds: 2,
        defensiveRebounds: 5,
        rebounds: 7,
        assists: 1,
        fouls: 1,
        steals: 1,
        turnovers: 3,
        blocks: 3,
        plusMinus: -1
      }, {
        id: '1626157',
        first: 'Karl-Anthony',
        last: 'Towns',
        position: 'C',
        minutes: 32,
        seconds: 58,
        points: 17,
        fgm: 6,
        fga: 12,
        ftm: 4,
        fta: 4,
        tpm: 1,
        tpa: 5,
        offensiveRebounds: 2,
        defensiveRebounds: 13,
        rebounds: 15,
        assists: 0,
        fouls: 4,
        steals: 0,
        turnovers: 3,
        blocks: 2,
        plusMinus: 3
      }, {
        id: '202710',
        first: 'Jimmy',
        last: 'Butler',
        position: 'SG',
        minutes: 36,
        seconds: 35,
        points: 20,
        fgm: 6,
        fga: 12,
        ftm: 8,
        fta: 8,
        tpm: 0,
        tpa: 2,
        offensiveRebounds: 2,
        defensiveRebounds: 1,
        rebounds: 3,
        assists: 3,
        fouls: 2,
        steals: 1,
        turnovers: 4,
        blocks: 2,
        plusMinus: 7
      }, {
        id: '201952',
        first: 'Jeff',
        last: 'Teague',
        position: 'PG',
        minutes: 30,
        seconds: 56,
        points: 6,
        fgm: 2,
        fga: 9,
        ftm: 1,
        fta: 2,
        tpm: 1,
        tpa: 3,
        offensiveRebounds: 0,
        defensiveRebounds: 4,
        rebounds: 4,
        assists: 10,
        fouls: 3,
        steals: 0,
        turnovers: 1,
        blocks: 1,
        plusMinus: 0
      }, {
        id: '201565',
        first: 'Derrick',
        last: 'Rose',
        position: '',
        minutes: 26,
        seconds: 54,
        points: 11,
        fgm: 4,
        fga: 12,
        ftm: 3,
        fta: 3,
        tpm: 0,
        tpa: 4,
        offensiveRebounds: 0,
        defensiveRebounds: 2,
        rebounds: 2,
        assists: 5,
        fouls: 0,
        steals: 1,
        turnovers: 1,
        blocks: 0,
        plusMinus: 3
      }, {
        id: '1629006',
        first: 'Josh',
        last: 'Okogie',
        position: '',
        minutes: 24,
        seconds: 26,
        points: 12,
        fgm: 5,
        fga: 13,
        ftm: 1,
        fta: 1,
        tpm: 1,
        tpa: 6,
        offensiveRebounds: 1,
        defensiveRebounds: 3,
        rebounds: 4,
        assists: 0,
        fouls: 1,
        steals: 3,
        turnovers: 2,
        blocks: 0,
        plusMinus: 8
      }, {
        id: '201229',
        first: 'Anthony',
        last: 'Tolliver',
        position: '',
        minutes: 15,
        seconds: 21,
        points: 3,
        fgm: 1,
        fga: 4,
        ftm: 0,
        fta: 0,
        tpm: 1,
        tpa: 4,
        offensiveRebounds: 0,
        defensiveRebounds: 1,
        rebounds: 1,
        assists: 0,
        fouls: 3,
        steals: 0,
        turnovers: 0,
        blocks: 2,
        plusMinus: 11
      }, {
        id: '203476',
        first: 'Gorgui',
        last: 'Dieng',
        position: '',
        minutes: 15,
        seconds: 2,
        points: 9,
        fgm: 2,
        fga: 3,
        ftm: 5,
        fta: 6,
        tpm: 0,
        tpa: 1,
        offensiveRebounds: 1,
        defensiveRebounds: 6,
        rebounds: 7,
        assists: 0,
        fouls: 2,
        steals: 0,
        turnovers: 1,
        blocks: 1,
        plusMinus: 7
      }, {
        id: '1626145',
        first: 'Tyus',
        last: 'Jones',
        position: '',
        minutes: 17,
        seconds: 4,
        points: 8,
        fgm: 3,
        fga: 10,
        ftm: 0,
        fta: 0,
        tpm: 2,
        tpa: 6,
        offensiveRebounds: 0,
        defensiveRebounds: 4,
        rebounds: 4,
        assists: 4,
        fouls: 1,
        steals: 3,
        turnovers: 0,
        blocks: 1,
        plusMinus: 10
      }, {
        id: '1628966',
        first: 'Keita',
        last: 'Bates-Diop',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '2736',
        first: 'Luol',
        last: 'Deng',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '203263',
        first: 'James',
        last: 'Nunnally',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '1628383',
        first: 'Justin',
        last: 'Patton',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '1629123',
        first: 'Jared',
        last: 'Terrell',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '203710',
        first: 'C.J.',
        last: 'Williams',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }],
      stats: {
        points: 101,
        fgm: 36,
        fga: 85,
        ftm: 22,
        fta: 24,
        tpm: 7,
        tpa: 33,
        offensiveRebounds: 8,
        defensiveRebounds: 39,
        rebounds: 47,
        assists: 24,
        steals: 9,
        turnovers: 15,
        blocks: 12,
        technicalFouls: 0
      }
    },
    visitor: {
      id: '1610612754',
      abbr: 'IND',
      nickname: 'Pacers',
      location: 'Indiana',
      score: 91,
      leaders: {
        points: {
          count: 2,
          value: 20,
          players: ['202711', '203506']
        },
        assists: {
          count: 1,
          value: 6,
          players: ['201954']
        },
        rebounds: {
          count: 2,
          value: 7,
          players: ['203506', '1627734']
        }
      },
      players: [{
        id: '202711',
        first: 'Bojan',
        last: 'Bogdanovic',
        position: 'SF',
        minutes: 35,
        seconds: 42,
        points: 20,
        fgm: 8,
        fga: 13,
        ftm: 0,
        fta: 0,
        tpm: 4,
        tpa: 5,
        offensiveRebounds: 2,
        defensiveRebounds: 3,
        rebounds: 5,
        assists: 0,
        fouls: 2,
        steals: 0,
        turnovers: 3,
        blocks: 0,
        plusMinus: -18
      }, {
        id: '201152',
        first: 'Thaddeus',
        last: 'Young',
        position: 'PF',
        minutes: 33,
        seconds: 34,
        points: 9,
        fgm: 4,
        fga: 11,
        ftm: 1,
        fta: 2,
        tpm: 0,
        tpa: 2,
        offensiveRebounds: 3,
        defensiveRebounds: 3,
        rebounds: 6,
        assists: 0,
        fouls: 4,
        steals: 1,
        turnovers: 0,
        blocks: 1,
        plusMinus: -5
      }, {
        id: '1626167',
        first: 'Myles',
        last: 'Turner',
        position: 'C',
        minutes: 26,
        seconds: 0,
        points: 16,
        fgm: 6,
        fga: 13,
        ftm: 3,
        fta: 3,
        tpm: 1,
        tpa: 3,
        offensiveRebounds: 2,
        defensiveRebounds: 1,
        rebounds: 3,
        assists: 1,
        fouls: 5,
        steals: 1,
        turnovers: 1,
        blocks: 1,
        plusMinus: 0
      }, {
        id: '203506',
        first: 'Victor',
        last: 'Oladipo',
        position: 'SG',
        minutes: 33,
        seconds: 36,
        points: 20,
        fgm: 8,
        fga: 23,
        ftm: 2,
        fta: 4,
        tpm: 2,
        tpa: 7,
        offensiveRebounds: 1,
        defensiveRebounds: 6,
        rebounds: 7,
        assists: 3,
        fouls: 1,
        steals: 0,
        turnovers: 3,
        blocks: 1,
        plusMinus: -4
      }, {
        id: '201954',
        first: 'Darren',
        last: 'Collison',
        position: 'PG',
        minutes: 25,
        seconds: 9,
        points: 5,
        fgm: 1,
        fga: 6,
        ftm: 3,
        fta: 4,
        tpm: 0,
        tpa: 2,
        offensiveRebounds: 0,
        defensiveRebounds: 4,
        rebounds: 4,
        assists: 6,
        fouls: 1,
        steals: 2,
        turnovers: 2,
        blocks: 0,
        plusMinus: -2
      }, {
        id: '1627734',
        first: 'Domantas',
        last: 'Sabonis',
        position: '',
        minutes: 17,
        seconds: 27,
        points: 8,
        fgm: 3,
        fga: 8,
        ftm: 2,
        fta: 3,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 4,
        defensiveRebounds: 3,
        rebounds: 7,
        assists: 1,
        fouls: 2,
        steals: 0,
        turnovers: 1,
        blocks: 1,
        plusMinus: -9
      }, {
        id: '202709',
        first: 'Cory',
        last: 'Joseph',
        position: '',
        minutes: 26,
        seconds: 29,
        points: 7,
        fgm: 3,
        fga: 7,
        ftm: 0,
        fta: 0,
        tpm: 1,
        tpa: 3,
        offensiveRebounds: 0,
        defensiveRebounds: 3,
        rebounds: 3,
        assists: 5,
        fouls: 1,
        steals: 2,
        turnovers: 2,
        blocks: 0,
        plusMinus: -1
      }, {
        id: '203124',
        first: 'Kyle',
        last: "O'Quinn",
        position: '',
        minutes: 10,
        seconds: 43,
        points: 4,
        fgm: 2,
        fga: 4,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 1,
        offensiveRebounds: 0,
        defensiveRebounds: 4,
        rebounds: 4,
        assists: 1,
        fouls: 2,
        steals: 0,
        turnovers: 1,
        blocks: 2,
        plusMinus: 7
      }, {
        id: '201936',
        first: 'Tyreke',
        last: 'Evans',
        position: '',
        minutes: 15,
        seconds: 18,
        points: 2,
        fgm: 1,
        fga: 5,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 1,
        offensiveRebounds: 0,
        defensiveRebounds: 3,
        rebounds: 3,
        assists: 1,
        fouls: 2,
        steals: 0,
        turnovers: 2,
        blocks: 0,
        plusMinus: -7
      }, {
        id: '203926',
        first: 'Doug',
        last: 'McDermott',
        position: '',
        minutes: 16,
        seconds: 1,
        points: 0,
        fgm: 0,
        fga: 2,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 2,
        offensiveRebounds: 0,
        defensiveRebounds: 3,
        rebounds: 3,
        assists: 0,
        fouls: 4,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: -11
      }, {
        id: '1628988',
        first: 'Aaron',
        last: 'Holiday',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '1628993',
        first: 'Alize',
        last: 'Johnson',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '1628410',
        first: 'Edmond',
        last: 'Sumner',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '1628387',
        first: 'Ike',
        last: 'Anigbogu',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '1628388',
        first: 'TJ',
        last: 'Leaf',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '1628500',
        first: 'Ben',
        last: 'Moore',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '1628432',
        first: 'Davon',
        last: 'Reed',
        position: '',
        minutes: 0,
        seconds: 0,
        points: 0,
        fgm: 0,
        fga: 0,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: 0
      }],
      stats: {
        points: 91,
        fgm: 36,
        fga: 92,
        ftm: 11,
        fta: 16,
        tpm: 8,
        tpa: 26,
        offensiveRebounds: 12,
        defensiveRebounds: 33,
        rebounds: 45,
        assists: 18,
        steals: 6,
        turnovers: 15,
        blocks: 6,
        technicalFouls: 0
      }
    }
  }
}

export const playByPlay: PlayByPlay = {
  plays: [{
    event: 2,
    clock: '12:00',
    description: 'Start Period',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 4,
    clock: '11:57',
    description: 'Jump Ball Towns vs Turner (Gibson gains possession)',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 7,
    clock: '11:39',
    description: '[MIN] Towns Turnaround Hook Shot: Missed',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 8,
    clock: '11:37',
    description: '[MIN] Team Rebound',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 9,
    clock: '11:37',
    description: 'Stoppage: Out-of-Bounds',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 10,
    clock: '11:25',
    description: '[MIN 3-0] Gibson 3pt Shot: Made (3 PTS) Assist: Wiggins (1 AST)',
    home: 3,
    visitor: 0,
    period: 1
  }, {
    event: 12,
    clock: '10:59',
    description: '[IND] Turner Turnaround Fadeaway shot: Missed',
    home: 3,
    visitor: 0,
    period: 1
  }, {
    event: 13,
    clock: '10:57',
    description: '[MIN] Gibson Rebound (Off:0 Def:1)',
    home: 3,
    visitor: 0,
    period: 1
  }, {
    event: 14,
    clock: '10:49',
    description: '[MIN 5-0] Gibson Hook Shot: Made (5 PTS) Assist: Teague (1 AST)',
    home: 5,
    visitor: 0,
    period: 1
  }, {
    event: 16,
    clock: '10:29',
    description: '[IND 2-5] Young Reverse Layup Shot: Made (2 PTS) Assist: Turner (1 AST)',
    home: 5,
    visitor: 2,
    period: 1
  }, {
    event: 18,
    clock: '10:04',
    description: '[MIN 8-2] Towns 3pt Shot: Made (3 PTS) Assist: Teague (2 AST)',
    home: 8,
    visitor: 2,
    period: 1
  }, {
    event: 20,
    clock: '09:48',
    description: '[IND] Turner 3pt Shot: Missed',
    home: 8,
    visitor: 2,
    period: 1
  }, {
    event: 21,
    clock: '09:45',
    description: '[MIN] Teague Rebound (Off:0 Def:1)',
    home: 8,
    visitor: 2,
    period: 1
  }, {
    event: 22,
    clock: '09:39',
    description: '[MIN] Towns Layup Shot: Missed',
    home: 8,
    visitor: 2,
    period: 1
  }, {
    event: 24,
    clock: '09:36',
    description: '[IND] Young Rebound (Off:0 Def:1)',
    home: 8,
    visitor: 2,
    period: 1
  }, {
    event: 25,
    clock: '09:34',
    description: '[IND] Collison Driving Layup Shot: Missed',
    home: 8,
    visitor: 2,
    period: 1
  }, {
    event: 26,
    clock: '09:33',
    description: '[IND] Team Rebound',
    home: 8,
    visitor: 2,
    period: 1
  }, {
    event: 27,
    clock: '09:33',
    description: 'Stoppage: Out-of-Bounds',
    home: 8,
    visitor: 2,
    period: 1
  }, {
    event: 28,
    clock: '09:28',
    description: '[IND 4-8] Oladipo Step Back Jump shot: Made (2 PTS)',
    home: 8,
    visitor: 4,
    period: 1
  }, {
    event: 29,
    clock: '09:14',
    description: '[MIN] Teague Driving Floating Jump Shot: Missed',
    home: 8,
    visitor: 4,
    period: 1
  }, {
    event: 30,
    clock: '09:11',
    description: '[IND] Turner Rebound (Off:0 Def:1)',
    home: 8,
    visitor: 4,
    period: 1
  }, {
    event: 31,
    clock: '09:08',
    description: '[MIN] Teague Foul: Shooting (1 PF) (2 FTA) (S Foster)',
    home: 8,
    visitor: 4,
    period: 1
  }, {
    event: 33,
    clock: '09:08',
    description: '[IND 5-8] Collison Free Throw 1 of 2 (1 PTS)',
    home: 8,
    visitor: 5,
    period: 1
  }, {
    event: 34,
    clock: '09:08',
    description: '[IND] Collison Free Throw 2 of 2 Missed',
    home: 8,
    visitor: 5,
    period: 1
  }, {
    event: 35,
    clock: '09:06',
    description: '[MIN] Towns Rebound (Off:0 Def:1)',
    home: 8,
    visitor: 5,
    period: 1
  }, {
    event: 36,
    clock: '08:58',
    description: '[MIN 10-5] Wiggins Turnaround Jump Shot: Made (2 PTS) Assist: Teague (3 AST)',
    home: 10,
    visitor: 5,
    period: 1
  }, {
    event: 38,
    clock: '08:41',
    description: '[IND] Turner Jump Shot: Missed',
    home: 10,
    visitor: 5,
    period: 1
  }, {
    event: 39,
    clock: '08:39',
    description: '[MIN] Teague Rebound (Off:0 Def:2)',
    home: 10,
    visitor: 5,
    period: 1
  }, {
    event: 40,
    clock: '08:34',
    description: '[MIN 12-5] Towns Layup Shot: Made (5 PTS) Assist: Teague (4 AST)',
    home: 12,
    visitor: 5,
    period: 1
  }, {
    event: 42,
    clock: '08:11',
    description: '[IND] Young Driving Layup Shot: Missed',
    home: 12,
    visitor: 5,
    period: 1
  }, {
    event: 43,
    clock: '08:09',
    description: '[MIN] Towns Rebound (Off:0 Def:2)',
    home: 12,
    visitor: 5,
    period: 1
  }, {
    event: 44,
    clock: '08:06',
    description: '[IND] Turner Foul: Shooting (1 PF) (2 FTA) (A Moyer-Gleich)',
    home: 12,
    visitor: 5,
    period: 1
  }, {
    event: 46,
    clock: '08:06',
    description: '[MIN 13-5] Butler Free Throw 1 of 2 (1 PTS)',
    home: 13,
    visitor: 5,
    period: 1
  }, {
    event: 47,
    clock: '08:06',
    description: '[MIN 14-5] Butler Free Throw 2 of 2 (2 PTS)',
    home: 14,
    visitor: 5,
    period: 1
  }, {
    event: 48,
    clock: '07:51',
    description: '[IND 7-14] Oladipo Driving Layup Shot: Made (4 PTS)',
    home: 14,
    visitor: 7,
    period: 1
  }, {
    event: 49,
    clock: '07:34',
    description: '[MIN] Wiggins Jump Shot: Missed',
    home: 14,
    visitor: 7,
    period: 1
  }, {
    event: 50,
    clock: '07:33',
    description: '[IND] Bogdanovic Rebound (Off:0 Def:1)',
    home: 14,
    visitor: 7,
    period: 1
  }, {
    event: 51,
    clock: '07:25',
    description: '[IND] Bogdanovic Jump Shot: Missed',
    home: 14,
    visitor: 7,
    period: 1
  }, {
    event: 53,
    clock: '07:25',
    description: '[IND] Team Rebound',
    home: 14,
    visitor: 7,
    period: 1
  }, {
    event: 54,
    clock: '07:25',
    description: 'Stoppage: Out-of-Bounds',
    home: 14,
    visitor: 7,
    period: 1
  }, {
    event: 55,
    clock: '07:17',
    description: '[IND 9-14] Oladipo Step Back Jump shot: Made (6 PTS)',
    home: 14,
    visitor: 9,
    period: 1
  }, {
    event: 56,
    clock: '07:03',
    description: '[MIN] Towns Turnover : Lost Ball (1 TO) Steal:Young (1 ST)',
    home: 14,
    visitor: 9,
    period: 1
  }, {
    event: 58,
    clock: '06:58',
    description: '[IND 12-14] Bogdanovic 3pt Shot: Made (3 PTS) Assist: Collison (1 AST)',
    home: 14,
    visitor: 12,
    period: 1
  }, {
    event: 60,
    clock: '06:44',
    description: '[IND] Turner Foul: Personal (2 PF) (A Moyer-Gleich)',
    home: 14,
    visitor: 12,
    period: 1
  }, {
    event: 62,
    clock: '06:44',
    description: '[MIN] Team Timeout : Regular',
    home: 14,
    visitor: 12,
    period: 1
  }, {
    event: 63,
    clock: '06:44',
    description: '[IND] Turner Substitution replaced by Sabonis',
    home: 14,
    visitor: 12,
    period: 1
  }, {
    event: 65,
    clock: '06:39',
    description: '[IND] Sabonis Foul: Shooting (1 PF) (2 FTA) (S Foster)',
    home: 14,
    visitor: 12,
    period: 1
  }, {
    event: 67,
    clock: '06:39',
    description: '[MIN 15-12] Butler Free Throw 1 of 2 (3 PTS)',
    home: 15,
    visitor: 12,
    period: 1
  }, {
    event: 68,
    clock: '06:39',
    description: '[MIN 16-12] Butler Free Throw 2 of 2 (4 PTS)',
    home: 16,
    visitor: 12,
    period: 1
  }, {
    event: 69,
    clock: '06:27',
    description: '[IND 14-16] Young Driving Hook Shot: Made (4 PTS)',
    home: 16,
    visitor: 14,
    period: 1
  }, {
    event: 70,
    clock: '06:27',
    description: '[MIN] Towns Violation:Defensive Goaltending (C Kirkland)',
    home: 16,
    visitor: 14,
    period: 1
  }, {
    event: 71,
    clock: '06:14',
    description: '[MIN] Towns 3pt Shot: Missed',
    home: 16,
    visitor: 14,
    period: 1
  }, {
    event: 72,
    clock: '06:11',
    description: '[IND] Sabonis Rebound (Off:0 Def:1)',
    home: 16,
    visitor: 14,
    period: 1
  }, {
    event: 73,
    clock: '06:06',
    description: '[IND 16-16] Oladipo Driving Reverse Layup Shot: Made (8 PTS)',
    home: 16,
    visitor: 16,
    period: 1
  }, {
    event: 74,
    clock: '05:49',
    description: '[MIN 18-16] Butler Jump Bank Shot: Made (6 PTS)',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 75,
    clock: '05:29',
    description: '[IND] Bogdanovic 3pt Shot: Missed',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 76,
    clock: '05:25',
    description: '[IND] Young Rebound (Off:1 Def:1)',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 77,
    clock: '05:25',
    description: '[IND] Young Tip Layup Shot: Missed',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 78,
    clock: '05:25',
    description: '[IND] Team Rebound',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 79,
    clock: '05:25',
    description: 'Stoppage: Out-of-Bounds',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 80,
    clock: '05:25',
    description: '[MIN] Butler Substitution replaced by Rose',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 82,
    clock: '05:14',
    description: '[IND] Oladipo 3pt Shot: Missed',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 83,
    clock: '05:11',
    description: '[IND] Sabonis Rebound (Off:1 Def:1)',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 84,
    clock: '05:08',
    description: '[IND] Sabonis Turnover : Lost Ball (1 TO) Steal:Rose (1 ST)',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 86,
    clock: '05:01',
    description: '[MIN] Gibson Turnover : Lost Ball (1 TO) Steal:Collison (1 ST)',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 88,
    clock: '04:55',
    description: '[IND] Young Jump Shot: Missed',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 89,
    clock: '04:53',
    description: '[IND] Bogdanovic Rebound (Off:1 Def:1)',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 90,
    clock: '04:48',
    description: '[IND] Young 3pt Shot: Missed',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 91,
    clock: '04:44',
    description: '[MIN] Gibson Rebound (Off:0 Def:2)',
    home: 18,
    visitor: 16,
    period: 1
  }, {
    event: 92,
    clock: '04:28',
    description: '[MIN 20-16] Towns Layup Shot: Made (7 PTS) Assist: Teague (5 AST)',
    home: 20,
    visitor: 16,
    period: 1
  }, {
    event: 94,
    clock: '04:17',
    description: '[IND] Bogdanovic Jump Shot: Missed',
    home: 20,
    visitor: 16,
    period: 1
  }, {
    event: 96,
    clock: '04:15',
    description: '[MIN] Towns Rebound (Off:0 Def:3)',
    home: 20,
    visitor: 16,
    period: 1
  }, {
    event: 97,
    clock: '04:11',
    description: '[MIN] Wiggins 3pt Shot: Missed',
    home: 20,
    visitor: 16,
    period: 1
  }, {
    event: 98,
    clock: '04:06',
    description: '[IND] Bogdanovic Rebound (Off:1 Def:2)',
    home: 20,
    visitor: 16,
    period: 1
  }, {
    event: 99,
    clock: '04:02',
    description: '[IND] Collison Driving Layup Shot: Missed',
    home: 20,
    visitor: 16,
    period: 1
  }, {
    event: 100,
    clock: '03:57',
    description: '[IND] Sabonis Rebound (Off:2 Def:1)',
    home: 20,
    visitor: 16,
    period: 1
  }, {
    event: 101,
    clock: '03:57',
    description: '[IND 18-20] Sabonis Tip Layup Shot: Made (2 PTS)',
    home: 20,
    visitor: 18,
    period: 1
  }, {
    event: 102,
    clock: '03:55',
    description: '[MIN] Team Timeout : Regular',
    home: 20,
    visitor: 18,
    period: 1
  }, {
    event: 103,
    clock: '03:55',
    description: '[MIN] Wiggins Substitution replaced by Okogie',
    home: 20,
    visitor: 18,
    period: 1
  }, {
    event: 104,
    clock: '03:55',
    description: "[IND] Young Substitution replaced by O'Quinn",
    home: 20,
    visitor: 18,
    period: 1
  }, {
    event: 105,
    clock: '03:55',
    description: '[IND] Bogdanovic Substitution replaced by Joseph',
    home: 20,
    visitor: 18,
    period: 1
  }, {
    event: 109,
    clock: '03:47',
    description: '[MIN] Teague Jump Shot: Missed',
    home: 20,
    visitor: 18,
    period: 1
  }, {
    event: 110,
    clock: '03:43',
    description: "[IND] O'Quinn Rebound (Off:0 Def:1)",
    home: 20,
    visitor: 18,
    period: 1
  }, {
    event: 111,
    clock: '03:33',
    description: "[IND 20-20] O'Quinn Jump Shot: Made (2 PTS) Assist: Joseph (1 AST)",
    home: 20,
    visitor: 20,
    period: 1
  }, {
    event: 113,
    clock: '03:23',
    description: '[MIN] Towns 3pt Shot: Missed',
    home: 20,
    visitor: 20,
    period: 1
  }, {
    event: 114,
    clock: '03:21',
    description: '[IND] Oladipo Rebound (Off:0 Def:1)',
    home: 20,
    visitor: 20,
    period: 1
  }, {
    event: 115,
    clock: '03:15',
    description: '[MIN] Okogie Foul: Shooting (1 PF) (2 FTA) (S Foster)',
    home: 20,
    visitor: 20,
    period: 1
  }, {
    event: 117,
    clock: '03:15',
    description: '[IND 21-20] Oladipo Free Throw 1 of 2 (9 PTS)',
    home: 20,
    visitor: 21,
    period: 1
  }, {
    event: 118,
    clock: '03:15',
    description: '[MIN] Gibson Substitution replaced by Tolliver',
    home: 20,
    visitor: 21,
    period: 1
  }, {
    event: 119,
    clock: '03:15',
    description: '[IND] Collison Substitution replaced by Evans',
    home: 20,
    visitor: 21,
    period: 1
  }, {
    event: 122,
    clock: '03:15',
    description: '[IND 22-20] Oladipo Free Throw 2 of 2 (10 PTS)',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 123,
    clock: '03:04',
    description: '[MIN] Tolliver 3pt Shot: Missed',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 124,
    clock: '03:01',
    description: '[IND] Evans Rebound (Off:0 Def:1)',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 125,
    clock: '02:59',
    description: '[MIN] Tolliver Foul: Personal (1 PF) (S Foster)',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 127,
    clock: '02:59',
    description: '[MIN] Towns Substitution replaced by Dieng',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 129,
    clock: '02:51',
    description: '[IND] Oladipo 3pt Shot: Missed',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 130,
    clock: '02:47',
    description: '[MIN] Tolliver Rebound (Off:0 Def:1)',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 131,
    clock: '02:42',
    description: '[MIN] Teague Jump Shot: Missed',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 133,
    clock: '02:37',
    description: '[IND] Oladipo Rebound (Off:0 Def:2)',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 134,
    clock: '02:32',
    description: "[IND] O'Quinn 3pt Shot: Missed",
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 135,
    clock: '02:30',
    description: '[MIN] Okogie Rebound (Off:0 Def:1)',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 136,
    clock: '02:21',
    description: '[IND] Evans Foul: Shooting (1 PF) (2 FTA) (S Foster)',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 138,
    clock: '02:21',
    description: '[MIN] Dieng Free Throw 1 of 2 Missed',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 139,
    clock: '02:21',
    description: '[MIN] Team Rebound',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 140,
    clock: '02:21',
    description: '[MIN] Teague Substitution replaced by Jones',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 141,
    clock: '02:21',
    description: '[IND] Oladipo Substitution replaced by McDermott',
    home: 20,
    visitor: 22,
    period: 1
  }, {
    event: 144,
    clock: '02:21',
    description: '[MIN 21-22] Dieng Free Throw 2 of 2 (1 PTS)',
    home: 21,
    visitor: 22,
    period: 1
  }, {
    event: 145,
    clock: '02:08',
    description: '[IND 24-21] Joseph Step Back Jump shot: Made (2 PTS)',
    home: 21,
    visitor: 24,
    period: 1
  }, {
    event: 146,
    clock: '01:58',
    description: '[MIN] Tolliver 3pt Shot: Missed',
    home: 21,
    visitor: 24,
    period: 1
  }, {
    event: 147,
    clock: '01:56',
    description: "[IND] O'Quinn Rebound (Off:0 Def:2)",
    home: 21,
    visitor: 24,
    period: 1
  }, {
    event: 148,
    clock: '01:53',
    description: '[MIN] Tolliver Foul: Personal (2 PF) (S Foster)',
    home: 21,
    visitor: 24,
    period: 1
  }, {
    event: 150,
    clock: '01:42',
    description: "[IND 26-21] O'Quinn Hook Shot: Made (4 PTS)",
    home: 21,
    visitor: 26,
    period: 1
  }, {
    event: 151,
    clock: '01:27',
    description: '[MIN] Dieng Turnover : Lost Ball (1 TO) Steal:Joseph (1 ST)',
    home: 21,
    visitor: 26,
    period: 1
  }, {
    event: 153,
    clock: '01:21',
    description: '[IND] Evans Driving Layup Shot: Missed',
    home: 21,
    visitor: 26,
    period: 1
  }, {
    event: 155,
    clock: '01:17',
    description: '[MIN] Dieng Rebound (Off:0 Def:1)',
    home: 21,
    visitor: 26,
    period: 1
  }, {
    event: 156,
    clock: '01:14',
    description: '[MIN] Okogie Layup Shot: Missed',
    home: 21,
    visitor: 26,
    period: 1
  }, {
    event: 158,
    clock: '01:14',
    description: '[MIN] Team Rebound',
    home: 21,
    visitor: 26,
    period: 1
  }, {
    event: 159,
    clock: '01:14',
    description: 'Stoppage: Out-of-Bounds',
    home: 21,
    visitor: 26,
    period: 1
  }, {
    event: 160,
    clock: '01:12',
    description: '[MIN 23-26] Dieng Jump Shot: Made (3 PTS) Assist: Jones (1 AST)',
    home: 23,
    visitor: 26,
    period: 1
  }, {
    event: 162,
    clock: '00:58.8',
    description: '[IND] Sabonis Turnaround Hook Shot: Missed',
    home: 23,
    visitor: 26,
    period: 1
  }, {
    event: 163,
    clock: '00:58.1',
    description: '[MIN] Team Rebound',
    home: 23,
    visitor: 26,
    period: 1
  }, {
    event: 164,
    clock: '00:58.1',
    description: '[IND] Sabonis Foul: Loose Ball (2 PF) (2 FTA) (C Kirkland)',
    home: 23,
    visitor: 26,
    period: 1
  }, {
    event: 166,
    clock: '00:58.1',
    description: '[MIN 24-26] Dieng Free Throw 1 of 2 (4 PTS)',
    home: 24,
    visitor: 26,
    period: 1
  }, {
    event: 167,
    clock: '00:58.1',
    description: '[IND] Sabonis Substitution replaced by Bogdanovic',
    home: 24,
    visitor: 26,
    period: 1
  }, {
    event: 169,
    clock: '00:58.1',
    description: '[MIN 25-26] Dieng Free Throw 2 of 2 (5 PTS)',
    home: 25,
    visitor: 26,
    period: 1
  }, {
    event: 170,
    clock: '00:41.2',
    description: '[IND 28-25] Bogdanovic Cutting Layup Shot: Made (5 PTS) Assist: Joseph (2 AST)',
    home: 25,
    visitor: 28,
    period: 1
  }, {
    event: 172,
    clock: '00:26.7',
    description: '[MIN] Rose Jump Shot: Missed',
    home: 25,
    visitor: 28,
    period: 1
  }, {
    event: 173,
    clock: '00:24.7',
    description: "[IND] O'Quinn Rebound (Off:0 Def:3)",
    home: 25,
    visitor: 28,
    period: 1
  }, {
    event: 174,
    clock: '00:02.5',
    description: '[IND] Evans Driving Layup Shot: Missed',
    home: 25,
    visitor: 28,
    period: 1
  }, {
    event: 175,
    clock: '00:00.2',
    description: '[MIN] Rose Rebound (Off:0 Def:1)',
    home: 25,
    visitor: 28,
    period: 1
  }, {
    event: 176,
    clock: '00:00.0',
    description: '[MIN] Rose 3pt Shot: Missed',
    home: 25,
    visitor: 28,
    period: 1
  }, {
    event: 177,
    clock: '00:00.0',
    description: '[MIN] Team Rebound',
    home: 25,
    visitor: 28,
    period: 1
  }, {
    event: 178,
    clock: '00:00.0',
    description: 'End Period',
    home: 25,
    visitor: 28,
    period: 1
  }, {
    event: 181,
    clock: '12:00',
    description: 'Start Period',
    home: 25,
    visitor: 28,
    period: 2
  }, {
    event: 182,
    clock: '11:47',
    description: '[MIN] Butler Foul: Personal (1 PF) (S Foster)',
    home: 25,
    visitor: 28,
    period: 2
  }, {
    event: 184,
    clock: '11:45',
    description: '[MIN] Jones Violation:Kicked Ball (A Moyer-Gleich)',
    home: 25,
    visitor: 28,
    period: 2
  }, {
    event: 186,
    clock: '11:34',
    description: '[IND] Bogdanovic Turnover : Lost Ball (1 TO) Steal:Jones (1 ST)',
    home: 25,
    visitor: 28,
    period: 2
  }, {
    event: 188,
    clock: '11:28',
    description: '[MIN 27-28] Butler Driving Layup Shot: Made (8 PTS) Assist: Jones (2 AST)',
    home: 27,
    visitor: 28,
    period: 2
  }, {
    event: 190,
    clock: '11:19',
    description: "[IND] O'Quinn Jump Shot: Missed",
    home: 27,
    visitor: 28,
    period: 2
  }, {
    event: 191,
    clock: '11:16',
    description: '[MIN] Dieng Rebound (Off:0 Def:2)',
    home: 27,
    visitor: 28,
    period: 2
  }, {
    event: 192,
    clock: '11:08',
    description: '[MIN] Jones Driving Layup Shot: Missed',
    home: 27,
    visitor: 28,
    period: 2
  }, {
    event: 193,
    clock: '11:05',
    description: '[IND] Joseph Rebound (Off:0 Def:1)',
    home: 27,
    visitor: 28,
    period: 2
  }, {
    event: 194,
    clock: '10:57',
    description: '[IND] Evans Turnover : Out of Bounds Lost Ball Turnover (1 TO)',
    home: 27,
    visitor: 28,
    period: 2
  }, {
    event: 195,
    clock: '10:36',
    description: '[MIN] Butler Jump Shot: Missed',
    home: 27,
    visitor: 28,
    period: 2
  }, {
    event: 196,
    clock: '10:32',
    description: "[IND] O'Quinn Rebound (Off:0 Def:4)",
    home: 27,
    visitor: 28,
    period: 2
  }, {
    event: 197,
    clock: '10:20',
    description: "[IND 31-27] Joseph 3pt Shot: Made (5 PTS) Assist: O'Quinn (1 AST)",
    home: 27,
    visitor: 31,
    period: 2
  }, {
    event: 199,
    clock: '10:02',
    description: '[MIN] Jones 3pt Shot: Missed',
    home: 27,
    visitor: 31,
    period: 2
  }, {
    event: 200,
    clock: '10:00',
    description: '[IND] Evans Rebound (Off:0 Def:2)',
    home: 27,
    visitor: 31,
    period: 2
  }, {
    event: 201,
    clock: '09:58',
    description: '[IND] Evans Foul: Offensive Charge (2 PF) (C Kirkland)',
    home: 27,
    visitor: 31,
    period: 2
  }, {
    event: 203,
    clock: '09:58',
    description: '[IND] Evans Turnover : Offensive Foul Turnover (2 TO)',
    home: 27,
    visitor: 31,
    period: 2
  }, {
    event: 204,
    clock: '09:58',
    description: "[IND] O'Quinn Substitution replaced by Turner",
    home: 27,
    visitor: 31,
    period: 2
  }, {
    event: 206,
    clock: '09:44',
    description: '[IND] Joseph Foul: Shooting (1 PF) (3 FTA) (A Moyer-Gleich)',
    home: 27,
    visitor: 31,
    period: 2
  }, {
    event: 208,
    clock: '09:44',
    description: '[MIN 28-31] Rose Free Throw 1 of 3 (1 PTS)',
    home: 28,
    visitor: 31,
    period: 2
  }, {
    event: 209,
    clock: '09:44',
    description: '[MIN 29-31] Rose Free Throw 2 of 3 (2 PTS)',
    home: 29,
    visitor: 31,
    period: 2
  }, {
    event: 210,
    clock: '09:44',
    description: '[MIN 30-31] Rose Free Throw 3 of 3 (3 PTS)',
    home: 30,
    visitor: 31,
    period: 2
  }, {
    event: 211,
    clock: '09:32',
    description: '[MIN] Tolliver Foul: Personal (3 PF) (A Moyer-Gleich)',
    home: 30,
    visitor: 31,
    period: 2
  }, {
    event: 213,
    clock: '09:32',
    description: '[MIN] Tolliver Substitution replaced by Gibson',
    home: 30,
    visitor: 31,
    period: 2
  }, {
    event: 215,
    clock: '09:23',
    description: '[MIN] Dieng Foul: Shooting (1 PF) (2 FTA) (A Moyer-Gleich)',
    home: 30,
    visitor: 31,
    period: 2
  }, {
    event: 217,
    clock: '09:23',
    description: '[IND 32-30] Turner Free Throw 1 of 2 (1 PTS)',
    home: 30,
    visitor: 32,
    period: 2
  }, {
    event: 218,
    clock: '09:23',
    description: '[IND 33-30] Turner Free Throw 2 of 2 (2 PTS)',
    home: 30,
    visitor: 33,
    period: 2
  }, {
    event: 219,
    clock: '09:12',
    description: '[IND] McDermott Foul: Personal (1 PF) (C Kirkland)',
    home: 30,
    visitor: 33,
    period: 2
  }, {
    event: 221,
    clock: '09:00',
    description: '[MIN 32-33] Butler Driving Layup Shot: Made (10 PTS)',
    home: 32,
    visitor: 33,
    period: 2
  }, {
    event: 222,
    clock: '08:47',
    description: '[IND] Joseph Turnover : Bad Pass (1 TO) Steal:Jones (2 ST)',
    home: 32,
    visitor: 33,
    period: 2
  }, {
    event: 224,
    clock: '08:43',
    description: '[MIN 34-33] Butler Driving Dunk Shot: Made (12 PTS)',
    home: 34,
    visitor: 33,
    period: 2
  }, {
    event: 225,
    clock: '08:36',
    description: '[IND] Team Timeout : Regular',
    home: 34,
    visitor: 33,
    period: 2
  }, {
    event: 226,
    clock: '08:36',
    description: '[IND] Bogdanovic Substitution replaced by Young',
    home: 34,
    visitor: 33,
    period: 2
  }, {
    event: 228,
    clock: '08:18',
    description: '[IND] Young 3pt Shot: Missed',
    home: 34,
    visitor: 33,
    period: 2
  }, {
    event: 229,
    clock: '08:15',
    description: '[MIN] Jones Rebound (Off:0 Def:1)',
    home: 34,
    visitor: 33,
    period: 2
  }, {
    event: 230,
    clock: '08:04',
    description: '[MIN 36-33] Gibson Floating Jump shot: Made (7 PTS) Assist: Butler (1 AST)',
    home: 36,
    visitor: 33,
    period: 2
  }, {
    event: 232,
    clock: '07:39',
    description: '[IND 36-36] Turner 3pt Shot: Made (5 PTS) Assist: Joseph (3 AST)',
    home: 36,
    visitor: 36,
    period: 2
  }, {
    event: 233,
    clock: '07:14',
    description: '[MIN] Dieng 3pt Shot: Missed',
    home: 36,
    visitor: 36,
    period: 2
  }, {
    event: 234,
    clock: '07:12',
    description: '[IND] McDermott Rebound (Off:0 Def:1)',
    home: 36,
    visitor: 36,
    period: 2
  }, {
    event: 235,
    clock: '07:04',
    description: '[MIN] Gibson Foul: Shooting (1 PF) (2 FTA) (C Kirkland)',
    home: 36,
    visitor: 36,
    period: 2
  }, {
    event: 237,
    clock: '07:04',
    description: '[IND] Young Free Throw 1 of 2 Missed',
    home: 36,
    visitor: 36,
    period: 2
  }, {
    event: 238,
    clock: '07:04',
    description: '[IND] Team Rebound',
    home: 36,
    visitor: 36,
    period: 2
  }, {
    event: 239,
    clock: '07:04',
    description: '[MIN] Dieng Substitution replaced by Towns',
    home: 36,
    visitor: 36,
    period: 2
  }, {
    event: 240,
    clock: '07:04',
    description: '[IND] Evans Substitution replaced by Oladipo',
    home: 36,
    visitor: 36,
    period: 2
  }, {
    event: 243,
    clock: '07:04',
    description: '[IND 37-36] Young Free Throw 2 of 2 (5 PTS)',
    home: 36,
    visitor: 37,
    period: 2
  }, {
    event: 244,
    clock: '06:45',
    description: '[MIN] Jones 3pt Shot: Missed',
    home: 36,
    visitor: 37,
    period: 2
  }, {
    event: 245,
    clock: '06:43',
    description: '[IND] Oladipo Rebound (Off:0 Def:3)',
    home: 36,
    visitor: 37,
    period: 2
  }, {
    event: 246,
    clock: '06:39',
    description: '[IND] Oladipo 3pt Shot: Missed',
    home: 36,
    visitor: 37,
    period: 2
  }, {
    event: 247,
    clock: '06:33',
    description: '[IND] Young Rebound (Off:2 Def:1)',
    home: 36,
    visitor: 37,
    period: 2
  }, {
    event: 248,
    clock: '06:33',
    description: '[IND 39-36] Young Putback Layup Shot: Made (7 PTS)',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 249,
    clock: '06:18',
    description: '[MIN] Rose 3pt Shot: Missed',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 250,
    clock: '06:16',
    description: '[IND] Young Rebound (Off:2 Def:2)',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 251,
    clock: '06:06',
    description: '[IND] Oladipo Jump Shot: Missed',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 252,
    clock: '06:02',
    description: '[IND] Young Rebound (Off:3 Def:2)',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 253,
    clock: '05:59',
    description: '[IND] McDermott 3pt Shot: Missed',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 254,
    clock: '05:57',
    description: '[IND] Oladipo Rebound (Off:1 Def:3)',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 255,
    clock: '05:51',
    description: '[IND] Oladipo Floating Jump shot: Missed',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 256,
    clock: '05:48',
    description: '[MIN] Jones Rebound (Off:0 Def:2)',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 257,
    clock: '05:44',
    description: '[MIN] Jones Driving Layup Shot: Missed',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 258,
    clock: '05:43',
    description: '[IND] McDermott Rebound (Off:0 Def:2)',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 259,
    clock: '05:38',
    description: '[IND] Joseph 3pt Shot: Missed',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 260,
    clock: '05:34',
    description: '[MIN] Towns Rebound (Off:0 Def:4)',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 261,
    clock: '05:27',
    description: '[IND] Young Foul: Personal (1 PF) (C Kirkland)',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 263,
    clock: '05:27',
    description: '[MIN] Jones Substitution replaced by Teague',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 264,
    clock: '05:27',
    description: '[IND] Joseph Substitution replaced by Collison',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 267,
    clock: '05:14',
    description: '[MIN] Teague Step Back Jump shot: Missed',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 268,
    clock: '05:11',
    description: '[IND] Oladipo Rebound (Off:1 Def:4)',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 269,
    clock: '05:02',
    description: '[IND] Collison Driving Layup Shot: Missed',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 271,
    clock: '04:59',
    description: '[MIN] Gibson Rebound (Off:0 Def:3)',
    home: 36,
    visitor: 39,
    period: 2
  }, {
    event: 272,
    clock: '04:56',
    description: '[MIN 38-39] Butler Driving Layup Shot: Made (14 PTS) Assist: Teague (6 AST)',
    home: 38,
    visitor: 39,
    period: 2
  }, {
    event: 274,
    clock: '04:36',
    description: '[IND] Turner Turnaround Hook Shot: Missed',
    home: 38,
    visitor: 39,
    period: 2
  }, {
    event: 275,
    clock: '04:33',
    description: '[MIN] Towns Rebound (Off:0 Def:5)',
    home: 38,
    visitor: 39,
    period: 2
  }, {
    event: 276,
    clock: '04:29',
    description: '[MIN 40-39] Gibson Layup Shot: Made (9 PTS) Assist: Rose (1 AST)',
    home: 40,
    visitor: 39,
    period: 2
  }, {
    event: 278,
    clock: '04:23',
    description: '[IND] Team Timeout : Regular',
    home: 40,
    visitor: 39,
    period: 2
  }, {
    event: 279,
    clock: '04:23',
    description: '[MIN] Rose Substitution replaced by Okogie',
    home: 40,
    visitor: 39,
    period: 2
  }, {
    event: 280,
    clock: '04:23',
    description: '[IND] McDermott Substitution replaced by Bogdanovic',
    home: 40,
    visitor: 39,
    period: 2
  }, {
    event: 283,
    clock: '04:13',
    description: '[IND 41-40] Turner Jump Shot: Made (7 PTS) Assist: Oladipo (1 AST)',
    home: 40,
    visitor: 41,
    period: 2
  }, {
    event: 285,
    clock: '04:13',
    description: '[MIN] Towns Foul: Shooting (1 PF) (1 FTA) (S Foster)',
    home: 40,
    visitor: 41,
    period: 2
  }, {
    event: 287,
    clock: '04:13',
    description: '[IND 42-40] Turner Free Throw 1 of 1 (8 PTS)',
    home: 40,
    visitor: 42,
    period: 2
  }, {
    event: 288,
    clock: '03:58',
    description: '[IND] Collison Foul: Personal (1 PF) (S Foster)',
    home: 40,
    visitor: 42,
    period: 2
  }, {
    event: 290,
    clock: '03:49',
    description: '[MIN] Gibson Turnover : Traveling (2 TO)',
    home: 40,
    visitor: 42,
    period: 2
  }, {
    event: 291,
    clock: '03:39',
    description: '[IND] Oladipo Floating Jump shot: Missed',
    home: 40,
    visitor: 42,
    period: 2
  }, {
    event: 292,
    clock: '03:35',
    description: '[IND] Turner Rebound (Off:1 Def:1)',
    home: 40,
    visitor: 42,
    period: 2
  }, {
    event: 294,
    clock: '03:33',
    description: '[IND 44-40] Turner Jump Shot: Made (10 PTS)',
    home: 40,
    visitor: 44,
    period: 2
  }, {
    event: 295,
    clock: '03:24',
    description: '[MIN] Okogie 3pt Shot: Missed',
    home: 40,
    visitor: 44,
    period: 2
  }, {
    event: 296,
    clock: '03:22',
    description: '[IND] Collison Rebound (Off:0 Def:1)',
    home: 40,
    visitor: 44,
    period: 2
  }, {
    event: 297,
    clock: '03:08',
    description: '[IND] Collison Turnover : Bad Pass (1 TO) Steal:Gibson (1 ST)',
    home: 40,
    visitor: 44,
    period: 2
  }, {
    event: 299,
    clock: '03:06',
    description: '[MIN 42-44] Okogie Driving Layup Shot: Made (2 PTS)',
    home: 42,
    visitor: 44,
    period: 2
  }, {
    event: 300,
    clock: '03:06',
    description: '[IND] Oladipo Violation:Defensive Goaltending (C Kirkland)',
    home: 42,
    visitor: 44,
    period: 2
  }, {
    event: 301,
    clock: '02:54',
    description: '[IND] Bogdanovic Foul: Offensive Charge (1 PF)',
    home: 42,
    visitor: 44,
    period: 2
  }, {
    event: 303,
    clock: '02:54',
    description: '[IND] Bogdanovic Turnover : Offensive Foul Turnover (2 TO)',
    home: 42,
    visitor: 44,
    period: 2
  }, {
    event: 304,
    clock: '02:54',
    description: '[MIN] Butler Substitution replaced by Rose',
    home: 42,
    visitor: 44,
    period: 2
  }, {
    event: 306,
    clock: '02:42',
    description: '[MIN] Okogie Turnover : Out of Bounds Lost Ball Turnover (1 TO)',
    home: 42,
    visitor: 44,
    period: 2
  }, {
    event: 307,
    clock: '02:24',
    description: '[IND 47-42] Oladipo 3pt Shot: Made (13 PTS)',
    home: 42,
    visitor: 47,
    period: 2
  }, {
    event: 308,
    clock: '02:06',
    description: '[MIN 44-47] Towns Floating Jump shot: Made (9 PTS) Assist: Teague (7 AST)',
    home: 44,
    visitor: 47,
    period: 2
  }, {
    event: 310,
    clock: '01:54',
    description: '[IND 49-44] Oladipo Driving Layup Shot: Made (15 PTS) Assist: Collison (2 AST)',
    home: 44,
    visitor: 49,
    period: 2
  }, {
    event: 312,
    clock: '01:40',
    description: 'Stoppage: Out-of-Bounds',
    home: 44,
    visitor: 49,
    period: 2
  }, {
    event: 313,
    clock: '01:32',
    description: '[IND] Young Foul: Personal (2 PF) (2 FTA) (C Kirkland)',
    home: 44,
    visitor: 49,
    period: 2
  }, {
    event: 315,
    clock: '01:32',
    description: '[MIN 45-49] Towns Free Throw 1 of 2 (10 PTS)',
    home: 45,
    visitor: 49,
    period: 2
  }, {
    event: 316,
    clock: '01:32',
    description: "[IND] Turner Substitution replaced by O'Quinn",
    home: 45,
    visitor: 49,
    period: 2
  }, {
    event: 318,
    clock: '01:32',
    description: '[MIN 46-49] Towns Free Throw 2 of 2 (11 PTS)',
    home: 46,
    visitor: 49,
    period: 2
  }, {
    event: 319,
    clock: '01:22',
    description: '[IND] Oladipo Pullup Jump shot: Missed',
    home: 46,
    visitor: 49,
    period: 2
  }, {
    event: 320,
    clock: '01:20',
    description: '[MIN] Towns Rebound (Off:0 Def:6)',
    home: 46,
    visitor: 49,
    period: 2
  }, {
    event: 321,
    clock: '01:13',
    description: '[MIN 48-49] Rose Driving Layup Shot: Made (5 PTS)',
    home: 48,
    visitor: 49,
    period: 2
  }, {
    event: 322,
    clock: '00:58.7',
    description: '[IND] Oladipo Turnover : Bad Pass (1 TO) Steal:Okogie (1 ST)',
    home: 48,
    visitor: 49,
    period: 2
  }, {
    event: 324,
    clock: '00:55.8',
    description: '[MIN 50-49] Okogie Driving Dunk Shot: Made (4 PTS) Assist: Rose (2 AST)',
    home: 50,
    visitor: 49,
    period: 2
  }, {
    event: 326,
    clock: '00:37.3',
    description: "[IND] O'Quinn Turnover : 3 Second Violation (1 TO)",
    home: 50,
    visitor: 49,
    period: 2
  }, {
    event: 327,
    clock: '00:27.7',
    description: '[MIN] Rose 3pt Shot: Missed',
    home: 50,
    visitor: 49,
    period: 2
  }, {
    event: 328,
    clock: '00:23.9',
    description: '[IND] Collison Rebound (Off:0 Def:2)',
    home: 50,
    visitor: 49,
    period: 2
  }, {
    event: 329,
    clock: '00:01.9',
    description: 'Stoppage: Out-of-Bounds',
    home: 50,
    visitor: 49,
    period: 2
  }, {
    event: 330,
    clock: '00:00.0',
    description: '[IND] Collison 3pt Shot: Missed',
    home: 50,
    visitor: 49,
    period: 2
  }, {
    event: 331,
    clock: '00:00.0',
    description: '[IND] Team Rebound',
    home: 50,
    visitor: 49,
    period: 2
  }, {
    event: 332,
    clock: '00:00.0',
    description: 'End Period',
    home: 50,
    visitor: 49,
    period: 2
  }, {
    event: 338,
    clock: '12:00',
    description: 'Start Period',
    home: 50,
    visitor: 49,
    period: 3
  }, {
    event: 339,
    clock: '11:41',
    description: '[IND 51-50] Turner Jump Shot: Made (12 PTS) Assist: Collison (3 AST)',
    home: 50,
    visitor: 51,
    period: 3
  }, {
    event: 341,
    clock: '11:20',
    description: '[MIN] Gibson Driving Layup Shot: Missed',
    home: 50,
    visitor: 51,
    period: 3
  }, {
    event: 343,
    clock: '11:20',
    description: '[MIN] Team Rebound',
    home: 50,
    visitor: 51,
    period: 3
  }, {
    event: 344,
    clock: '11:20',
    description: 'Stoppage: Out-of-Bounds',
    home: 50,
    visitor: 51,
    period: 3
  }, {
    event: 345,
    clock: '11:17',
    description: '[MIN] Okogie 3pt Shot: Missed',
    home: 50,
    visitor: 51,
    period: 3
  }, {
    event: 346,
    clock: '11:15',
    description: '[MIN] Gibson Rebound (Off:1 Def:3)',
    home: 50,
    visitor: 51,
    period: 3
  }, {
    event: 347,
    clock: '11:14',
    description: '[MIN 52-51] Gibson Hook Shot: Made (11 PTS)',
    home: 52,
    visitor: 51,
    period: 3
  }, {
    event: 348,
    clock: '11:03',
    description: '[IND] Bogdanovic Turnover : Traveling (3 TO)',
    home: 52,
    visitor: 51,
    period: 3
  }, {
    event: 349,
    clock: '10:53',
    description: '[IND] Young Foul: Personal (3 PF) (S Foster)',
    home: 52,
    visitor: 51,
    period: 3
  }, {
    event: 351,
    clock: '10:47',
    description: '[MIN] Okogie Turnover : Traveling (2 TO)',
    home: 52,
    visitor: 51,
    period: 3
  }, {
    event: 352,
    clock: '10:35',
    description: '[IND 53-52] Oladipo Pullup Jump shot: Made (17 PTS)',
    home: 52,
    visitor: 53,
    period: 3
  }, {
    event: 353,
    clock: '10:18',
    description: '[MIN] Butler Driving Layup Shot: Missed',
    home: 52,
    visitor: 53,
    period: 3
  }, {
    event: 358,
    clock: '10:16',
    description: '[MIN] Butler Rebound (Off:1 Def:0)',
    home: 52,
    visitor: 53,
    period: 3
  }, {
    event: 355,
    clock: '10:16',
    description: 'Jump Ball Towns vs Oladipo (Butler gains possession)',
    home: 52,
    visitor: 53,
    period: 3
  }, {
    event: 359,
    clock: '10:05',
    description: '[MIN] Okogie 3pt Shot: Missed',
    home: 52,
    visitor: 53,
    period: 3
  }, {
    event: 360,
    clock: '10:00',
    description: '[MIN] Towns Rebound (Off:1 Def:6)',
    home: 52,
    visitor: 53,
    period: 3
  }, {
    event: 361,
    clock: '09:59',
    description: '[MIN] Okogie Jump Shot: Missed',
    home: 52,
    visitor: 53,
    period: 3
  }, {
    event: 362,
    clock: '09:57',
    description: '[IND] Collison Rebound (Off:0 Def:3)',
    home: 52,
    visitor: 53,
    period: 3
  }, {
    event: 363,
    clock: '09:53',
    description: '[IND 56-52] Bogdanovic 3pt Shot: Made (8 PTS) Assist: Collison (4 AST)',
    home: 52,
    visitor: 56,
    period: 3
  }, {
    event: 365,
    clock: '09:38',
    description: '[MIN] Towns 3pt Shot: Missed',
    home: 52,
    visitor: 56,
    period: 3
  }, {
    event: 366,
    clock: '09:34',
    description: '[MIN] Okogie Rebound (Off:1 Def:1)',
    home: 52,
    visitor: 56,
    period: 3
  }, {
    event: 367,
    clock: '09:32',
    description: '[IND] Bogdanovic Foul: Shooting (2 PF) (2 FTA) (A Moyer-Gleich)',
    home: 52,
    visitor: 56,
    period: 3
  }, {
    event: 369,
    clock: '09:32',
    description: '[MIN 53-56] Butler Free Throw 1 of 2 (15 PTS)',
    home: 53,
    visitor: 56,
    period: 3
  }, {
    event: 370,
    clock: '09:32',
    description: '[MIN 54-56] Butler Free Throw 2 of 2 (16 PTS)',
    home: 54,
    visitor: 56,
    period: 3
  }, {
    event: 371,
    clock: '09:21',
    description: '[IND] Collison Turnover : Bad Pass (2 TO) Steal:Okogie (2 ST)',
    home: 54,
    visitor: 56,
    period: 3
  }, {
    event: 373,
    clock: '09:17',
    description: '[MIN] Butler Turnover : Lost Ball (1 TO) Steal:Collison (2 ST)',
    home: 54,
    visitor: 56,
    period: 3
  }, {
    event: 375,
    clock: '09:00',
    description: '[IND] Oladipo Driving Layup Shot: Missed',
    home: 54,
    visitor: 56,
    period: 3
  }, {
    event: 377,
    clock: '09:00',
    description: '[MIN] Towns Rebound (Off:1 Def:7)',
    home: 54,
    visitor: 56,
    period: 3
  }, {
    event: 378,
    clock: '08:50',
    description: '[MIN 56-56] Towns Cutting Dunk Shot: Made (13 PTS) Assist: Teague (8 AST)',
    home: 56,
    visitor: 56,
    period: 3
  }, {
    event: 380,
    clock: '08:35',
    description: '[MIN] Teague Foul: Shooting (2 PF) (2 FTA) (A Moyer-Gleich)',
    home: 56,
    visitor: 56,
    period: 3
  }, {
    event: 382,
    clock: '08:35',
    description: '[IND 57-56] Collison Free Throw 1 of 2 (2 PTS)',
    home: 56,
    visitor: 57,
    period: 3
  }, {
    event: 383,
    clock: '08:35',
    description: '[IND 58-56] Collison Free Throw 2 of 2 (3 PTS)',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 384,
    clock: '08:22',
    description: '[MIN] Okogie 3pt Shot: Missed',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 385,
    clock: '08:20',
    description: '[MIN] Team Rebound',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 386,
    clock: '08:20',
    description: '[IND] Turner Foul: Loose Ball (3 PF) (C Kirkland)',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 388,
    clock: '08:11',
    description: '[MIN] Okogie 3pt Shot: Missed',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 389,
    clock: '08:08',
    description: '[IND] Collison Rebound (Off:0 Def:4)',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 390,
    clock: '08:01',
    description: '[IND] Turner 3pt Shot: Missed',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 391,
    clock: '07:59',
    description: '[IND] Team Rebound',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 392,
    clock: '07:59',
    description: 'Stoppage: Out-of-Bounds',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 393,
    clock: '07:49',
    description: '[IND] Turner Foul: Offensive Charge (4 PF)',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 395,
    clock: '07:49',
    description: '[IND] Turner Turnover : Offensive Foul Turnover (1 TO)',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 396,
    clock: '07:49',
    description: '[IND] Turner Substitution replaced by Sabonis',
    home: 56,
    visitor: 58,
    period: 3
  }, {
    event: 398,
    clock: '07:34',
    description: '[MIN 58-58] Towns Cutting Layup Shot: Made (15 PTS) Assist: Gibson (1 AST)',
    home: 58,
    visitor: 58,
    period: 3
  }, {
    event: 400,
    clock: '07:26',
    description: '[IND] Oladipo Driving Layup Shot: Missed',
    home: 58,
    visitor: 58,
    period: 3
  }, {
    event: 402,
    clock: '07:23',
    description: '[MIN] Towns Rebound (Off:1 Def:8)',
    home: 58,
    visitor: 58,
    period: 3
  }, {
    event: 403,
    clock: '07:20',
    description: '[MIN 61-58] Teague 3pt Shot: Made (3 PTS)',
    home: 61,
    visitor: 58,
    period: 3
  }, {
    event: 404,
    clock: '07:20',
    description: '[IND] Team Timeout : Regular',
    home: 61,
    visitor: 58,
    period: 3
  }, {
    event: 405,
    clock: '07:08',
    description: '[IND 60-61] Bogdanovic Jump Shot: Made (10 PTS) Assist: Collison (5 AST)',
    home: 61,
    visitor: 60,
    period: 3
  }, {
    event: 407,
    clock: '06:50',
    description: '[IND] Oladipo Foul: Shooting (1 PF) (2 FTA) (C Kirkland)',
    home: 61,
    visitor: 60,
    period: 3
  }, {
    event: 409,
    clock: '06:50',
    description: '[MIN 62-60] Butler Free Throw 1 of 2 (17 PTS)',
    home: 62,
    visitor: 60,
    period: 3
  }, {
    event: 410,
    clock: '06:50',
    description: '[MIN 63-60] Butler Free Throw 2 of 2 (18 PTS)',
    home: 63,
    visitor: 60,
    period: 3
  }, {
    event: 411,
    clock: '06:40',
    description: '[IND] Young Jump Shot: Missed',
    home: 63,
    visitor: 60,
    period: 3
  }, {
    event: 413,
    clock: '06:37',
    description: '[MIN] Teague Rebound (Off:0 Def:3)',
    home: 63,
    visitor: 60,
    period: 3
  }, {
    event: 414,
    clock: '06:26',
    description: '[MIN 65-60] Okogie Driving Layup Shot: Made (6 PTS) Assist: Teague (9 AST)',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 416,
    clock: '06:10',
    description: '[IND] Oladipo 3pt Shot: Missed',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 417,
    clock: '06:08',
    description: '[MIN] Okogie Rebound (Off:1 Def:2)',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 418,
    clock: '05:57',
    description: '[MIN] Butler Foul: Offensive Charge (2 PF)',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 420,
    clock: '05:57',
    description: '[MIN] Butler Turnover : Offensive Foul Turnover (2 TO)',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 421,
    clock: '05:45',
    description: '[IND] Collison 3pt Shot: Missed',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 422,
    clock: '05:41',
    description: '[IND] Bogdanovic Rebound (Off:2 Def:2)',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 423,
    clock: '05:41',
    description: 'Stoppage: Out-of-Bounds',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 424,
    clock: '05:29',
    description: '[IND] Oladipo Jump Shot: Missed',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 425,
    clock: '05:26',
    description: '[MIN] Gibson Rebound (Off:1 Def:4)',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 426,
    clock: '05:20',
    description: '[MIN] Okogie Floating Jump shot: Missed',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 427,
    clock: '05:17',
    description: '[IND] Oladipo Rebound (Off:1 Def:5)',
    home: 65,
    visitor: 60,
    period: 3
  }, {
    event: 428,
    clock: '05:13',
    description: '[IND 63-65] Bogdanovic 3pt Shot: Made (13 PTS) Assist: Collison (6 AST)',
    home: 65,
    visitor: 63,
    period: 3
  }, {
    event: 430,
    clock: '04:53',
    description: '[MIN] Teague 3pt Shot: Missed',
    home: 65,
    visitor: 63,
    period: 3
  }, {
    event: 431,
    clock: '04:50',
    description: '[MIN] Towns Rebound (Off:2 Def:8)',
    home: 65,
    visitor: 63,
    period: 3
  }, {
    event: 432,
    clock: '04:50',
    description: '[MIN] Towns Turnover : Out of Bounds Lost Ball Turnover (2 TO)',
    home: 65,
    visitor: 63,
    period: 3
  }, {
    event: 433,
    clock: '04:50',
    description: '[MIN] Okogie Substitution replaced by Rose',
    home: 65,
    visitor: 63,
    period: 3
  }, {
    event: 435,
    clock: '04:37',
    description: '[IND] Oladipo Floating Jump shot: Missed',
    home: 65,
    visitor: 63,
    period: 3
  }, {
    event: 436,
    clock: '04:34',
    description: '[MIN] Towns Rebound (Off:2 Def:9)',
    home: 65,
    visitor: 63,
    period: 3
  }, {
    event: 437,
    clock: '04:31',
    description: '[MIN 67-63] Teague Driving Reverse Layup Shot: Made (5 PTS) Assist: Rose (3 AST)',
    home: 67,
    visitor: 63,
    period: 3
  }, {
    event: 439,
    clock: '04:13',
    description: '[IND] Bogdanovic Layup Shot: Missed',
    home: 67,
    visitor: 63,
    period: 3
  }, {
    event: 440,
    clock: '04:10',
    description: '[MIN] Towns Rebound (Off:2 Def:10)',
    home: 67,
    visitor: 63,
    period: 3
  }, {
    event: 441,
    clock: '04:01',
    description: '[MIN] Gibson Turnover : 3 Second Violation (3 TO)',
    home: 67,
    visitor: 63,
    period: 3
  }, {
    event: 442,
    clock: '04:01',
    description: '[IND] Bogdanovic Substitution replaced by Joseph',
    home: 67,
    visitor: 63,
    period: 3
  }, {
    event: 444,
    clock: '03:49',
    description: '[IND] Sabonis Layup Shot: Missed',
    home: 67,
    visitor: 63,
    period: 3
  }, {
    event: 446,
    clock: '03:46',
    description: '[MIN] Teague Rebound (Off:0 Def:4)',
    home: 67,
    visitor: 63,
    period: 3
  }, {
    event: 447,
    clock: '03:39',
    description: '[MIN] Towns 3pt Shot: Missed',
    home: 67,
    visitor: 63,
    period: 3
  }, {
    event: 448,
    clock: '03:35',
    description: '[MIN] Butler Rebound (Off:2 Def:0)',
    home: 67,
    visitor: 63,
    period: 3
  }, {
    event: 449,
    clock: '03:30',
    description: '[MIN 69-63] Butler Reverse Layup Shot: Made (20 PTS) Assist: Teague (10 AST)',
    home: 69,
    visitor: 63,
    period: 3
  }, {
    event: 451,
    clock: '03:15',
    description: '[IND] Oladipo Driving Layup Shot: Missed',
    home: 69,
    visitor: 63,
    period: 3
  }, {
    event: 452,
    clock: '03:14',
    description: '[IND] Sabonis Rebound (Off:3 Def:1)',
    home: 69,
    visitor: 63,
    period: 3
  }, {
    event: 453,
    clock: '03:14',
    description: '[MIN] Towns Foul: Shooting (2 PF) (2 FTA) (C Kirkland)',
    home: 69,
    visitor: 63,
    period: 3
  }, {
    event: 455,
    clock: '03:14',
    description: '[IND 64-69] Sabonis Free Throw 1 of 2 (3 PTS)',
    home: 69,
    visitor: 64,
    period: 3
  }, {
    event: 456,
    clock: '03:14',
    description: '[MIN] Towns Substitution replaced by Dieng',
    home: 69,
    visitor: 64,
    period: 3
  }, {
    event: 457,
    clock: '03:14',
    description: '[IND] Oladipo Substitution replaced by Evans',
    home: 69,
    visitor: 64,
    period: 3
  }, {
    event: 458,
    clock: '03:14',
    description: "[IND] Young Substitution replaced by O'Quinn",
    home: 69,
    visitor: 64,
    period: 3
  }, {
    event: 462,
    clock: '03:14',
    description: '[IND 65-69] Sabonis Free Throw 2 of 2 (4 PTS)',
    home: 69,
    visitor: 65,
    period: 3
  }, {
    event: 463,
    clock: '02:58',
    description: '[MIN] Teague Driving Floating Jump Shot: Missed',
    home: 69,
    visitor: 65,
    period: 3
  }, {
    event: 465,
    clock: '02:56',
    description: '[IND] Joseph Rebound (Off:0 Def:2)',
    home: 69,
    visitor: 65,
    period: 3
  }, {
    event: 466,
    clock: '02:49',
    description: '[IND 67-69] Joseph Floating Jump shot: Made (7 PTS)',
    home: 69,
    visitor: 67,
    period: 3
  }, {
    event: 467,
    clock: '02:31',
    description: "[IND] O'Quinn Foul: Personal (1 PF) (2 FTA) (C Kirkland)",
    home: 69,
    visitor: 67,
    period: 3
  }, {
    event: 469,
    clock: '02:31',
    description: '[MIN] Team Timeout : Regular',
    home: 69,
    visitor: 67,
    period: 3
  }, {
    event: 470,
    clock: '02:31',
    description: '[MIN] Gibson Substitution replaced by Tolliver',
    home: 69,
    visitor: 67,
    period: 3
  }, {
    event: 472,
    clock: '02:31',
    description: '[MIN] Teague Free Throw 1 of 2 Missed',
    home: 69,
    visitor: 67,
    period: 3
  }, {
    event: 473,
    clock: '02:31',
    description: '[MIN] Team Rebound',
    home: 69,
    visitor: 67,
    period: 3
  }, {
    event: 474,
    clock: '02:31',
    description: '[MIN 70-67] Teague Free Throw 2 of 2 (6 PTS)',
    home: 70,
    visitor: 67,
    period: 3
  }, {
    event: 475,
    clock: '02:12',
    description: '[IND] Evans Driving Layup Shot: Missed',
    home: 70,
    visitor: 67,
    period: 3
  }, {
    event: 477,
    clock: '02:10',
    description: '[MIN] Dieng Rebound (Off:0 Def:3)',
    home: 70,
    visitor: 67,
    period: 3
  }, {
    event: 478,
    clock: '02:06',
    description: '[MIN] Butler 3pt Shot: Missed',
    home: 70,
    visitor: 67,
    period: 3
  }, {
    event: 479,
    clock: '02:03',
    description: '[IND] Sabonis Rebound (Off:3 Def:2)',
    home: 70,
    visitor: 67,
    period: 3
  }, {
    event: 480,
    clock: '01:53',
    description: '[IND 69-70] Collison Jump Shot: Made (5 PTS) Assist: Sabonis (1 AST)',
    home: 70,
    visitor: 69,
    period: 3
  }, {
    event: 482,
    clock: '01:41',
    description: '[MIN] Butler 3pt Shot: Missed',
    home: 70,
    visitor: 69,
    period: 3
  }, {
    event: 483,
    clock: '01:38',
    description: '[IND] Sabonis Rebound (Off:3 Def:3)',
    home: 70,
    visitor: 69,
    period: 3
  }, {
    event: 484,
    clock: '01:27',
    description: '[IND 71-70] Sabonis Turnaround Hook Shot: Made (6 PTS)',
    home: 70,
    visitor: 71,
    period: 3
  }, {
    event: 485,
    clock: '01:16',
    description: '[MIN] Tolliver 3pt Shot: Missed',
    home: 70,
    visitor: 71,
    period: 3
  }, {
    event: 486,
    clock: '01:12',
    description: '[MIN] Dieng Rebound (Off:1 Def:3)',
    home: 70,
    visitor: 71,
    period: 3
  }, {
    event: 487,
    clock: '01:04',
    description: '[MIN] Rose 3pt Shot: Missed',
    home: 70,
    visitor: 71,
    period: 3
  }, {
    event: 488,
    clock: '01:03',
    description: '[MIN] Team Rebound',
    home: 70,
    visitor: 71,
    period: 3
  }, {
    event: 489,
    clock: '01:03',
    description: "[IND] O'Quinn Foul: Loose Ball (2 PF) (2 FTA) (C Kirkland)",
    home: 70,
    visitor: 71,
    period: 3
  }, {
    event: 491,
    clock: '01:03',
    description: '[MIN 71-71] Dieng Free Throw 1 of 2 (6 PTS)',
    home: 71,
    visitor: 71,
    period: 3
  }, {
    event: 492,
    clock: '01:03',
    description: '[MIN] Teague Substitution replaced by Jones',
    home: 71,
    visitor: 71,
    period: 3
  }, {
    event: 493,
    clock: '01:03',
    description: '[MIN] Butler Substitution replaced by Okogie',
    home: 71,
    visitor: 71,
    period: 3
  }, {
    event: 494,
    clock: '01:03',
    description: '[IND] Collison Substitution replaced by McDermott',
    home: 71,
    visitor: 71,
    period: 3
  }, {
    event: 498,
    clock: '01:03',
    description: '[MIN 72-71] Dieng Free Throw 2 of 2 (7 PTS)',
    home: 72,
    visitor: 71,
    period: 3
  }, {
    event: 499,
    clock: '00:44.2',
    description: '[IND] Sabonis Layup Shot: Missed',
    home: 72,
    visitor: 71,
    period: 3
  }, {
    event: 500,
    clock: '00:42.4',
    description: '[IND] Sabonis Rebound (Off:4 Def:3)',
    home: 72,
    visitor: 71,
    period: 3
  }, {
    event: 501,
    clock: '00:41.6',
    description: '[IND 73-72] Sabonis Putback Layup Shot: Made (8 PTS)',
    home: 72,
    visitor: 73,
    period: 3
  }, {
    event: 502,
    clock: '00:41.6',
    description: '[MIN] Dieng Foul: Shooting (2 PF) (1 FTA) (C Kirkland)',
    home: 72,
    visitor: 73,
    period: 3
  }, {
    event: 511,
    clock: '00:41.6',
    description: '[IND] Sabonis Free Throw 1 of 1 Missed',
    home: 72,
    visitor: 73,
    period: 3
  }, {
    event: 512,
    clock: '00:41.6',
    description: '[MIN] Dieng Rebound (Off:1 Def:4)',
    home: 72,
    visitor: 73,
    period: 3
  }, {
    event: 504,
    clock: '00:28.7',
    description: '[MIN] Rose Turnover : Lost Ball (1 TO) Steal:Joseph (2 ST)',
    home: 72,
    visitor: 73,
    period: 3
  }, {
    event: 506,
    clock: '00:22.0',
    description: '[IND] Joseph Turnover : Bad Pass (2 TO) Steal:Okogie (3 ST)',
    home: 72,
    visitor: 73,
    period: 3
  }, {
    event: 508,
    clock: '00:00.3',
    description: '[MIN] Rose Jump Shot: Missed',
    home: 72,
    visitor: 73,
    period: 3
  }, {
    event: 509,
    clock: '00:00.3',
    description: '[MIN] Team Rebound',
    home: 72,
    visitor: 73,
    period: 3
  }, {
    event: 510,
    clock: '00:00.0',
    description: 'End Period',
    home: 72,
    visitor: 73,
    period: 3
  }, {
    event: 515,
    clock: '12:00',
    description: 'Start Period',
    home: 72,
    visitor: 73,
    period: 4
  }, {
    event: 516,
    clock: '11:39',
    description: '[MIN 74-73] Rose Driving Layup Shot: Made (7 PTS)',
    home: 74,
    visitor: 73,
    period: 4
  }, {
    event: 517,
    clock: '11:23',
    description: '[IND] McDermott 3pt Shot: Missed',
    home: 74,
    visitor: 73,
    period: 4
  }, {
    event: 518,
    clock: '11:19',
    description: '[MIN] Dieng Rebound (Off:1 Def:5)',
    home: 74,
    visitor: 73,
    period: 4
  }, {
    event: 519,
    clock: '11:10',
    description: '[MIN 77-73] Jones 3pt Shot: Made (3 PTS) Assist: Rose (4 AST)',
    home: 77,
    visitor: 73,
    period: 4
  }, {
    event: 521,
    clock: '10:49',
    description: '[IND] Evans 3pt Shot: Missed',
    home: 77,
    visitor: 73,
    period: 4
  }, {
    event: 522,
    clock: '10:46',
    description: '[MIN] Rose Rebound (Off:0 Def:2)',
    home: 77,
    visitor: 73,
    period: 4
  }, {
    event: 523,
    clock: '10:41',
    description: '[MIN 79-73] Rose Driving Layup Shot: Made (9 PTS)',
    home: 79,
    visitor: 73,
    period: 4
  }, {
    event: 524,
    clock: '10:24',
    description: '[IND] Sabonis Jump Shot: Missed',
    home: 79,
    visitor: 73,
    period: 4
  }, {
    event: 525,
    clock: '10:22',
    description: '[MIN] Okogie Rebound (Off:1 Def:3)',
    home: 79,
    visitor: 73,
    period: 4
  }, {
    event: 526,
    clock: '10:17',
    description: '[MIN] Rose Jump Shot: Missed',
    home: 79,
    visitor: 73,
    period: 4
  }, {
    event: 527,
    clock: '10:15',
    description: '[IND] Evans Rebound (Off:0 Def:3)',
    home: 79,
    visitor: 73,
    period: 4
  }, {
    event: 528,
    clock: '09:57',
    description: '[IND] Joseph Jump Shot: Missed',
    home: 79,
    visitor: 73,
    period: 4
  }, {
    event: 529,
    clock: '09:57',
    description: '[MIN] Team Rebound',
    home: 79,
    visitor: 73,
    period: 4
  }, {
    event: 531,
    clock: '09:57',
    description: '[IND] McDermott Foul: Loose Ball (2 PF) (C Kirkland)',
    home: 79,
    visitor: 73,
    period: 4
  }, {
    event: 533,
    clock: '09:57',
    description: '[MIN] Rose Substitution replaced by Butler',
    home: 79,
    visitor: 73,
    period: 4
  }, {
    event: 535,
    clock: '09:48',
    description: '[MIN 81-73] Dieng Layup Shot: Made (9 PTS) Assist: Jones (3 AST)',
    home: 81,
    visitor: 73,
    period: 4
  }, {
    event: 537,
    clock: '09:48',
    description: '[IND] Team Timeout : Regular',
    home: 81,
    visitor: 73,
    period: 4
  }, {
    event: 538,
    clock: '09:27',
    description: '[IND] Sabonis Jump Shot: Missed',
    home: 81,
    visitor: 73,
    period: 4
  }, {
    event: 539,
    clock: '09:23',
    description: '[MIN] Dieng Rebound (Off:1 Def:6)',
    home: 81,
    visitor: 73,
    period: 4
  }, {
    event: 540,
    clock: '09:12',
    description: '[MIN 84-73] Tolliver 3pt Shot: Made (3 PTS) Assist: Jones (4 AST)',
    home: 84,
    visitor: 73,
    period: 4
  }, {
    event: 542,
    clock: '08:57',
    description: '[IND 75-84] Bogdanovic Driving Layup Shot: Made (15 PTS) Assist: Evans (1 AST)',
    home: 84,
    visitor: 75,
    period: 4
  }, {
    event: 543,
    clock: '08:41',
    description: '[MIN] Jones Driving Floating Bank Jump Shot: Missed',
    home: 84,
    visitor: 75,
    period: 4
  }, {
    event: 544,
    clock: '08:37',
    description: '[IND] McDermott Rebound (Off:0 Def:3)',
    home: 84,
    visitor: 75,
    period: 4
  }, {
    event: 545,
    clock: '08:25',
    description: '[IND 77-84] Evans Driving Layup Shot: Made (2 PTS) Assist: Joseph (4 AST)',
    home: 84,
    visitor: 77,
    period: 4
  }, {
    event: 546,
    clock: '08:07',
    description: '[MIN 86-77] Okogie Jump Shot: Made (8 PTS) Assist: Butler (2 AST)',
    home: 86,
    visitor: 77,
    period: 4
  }, {
    event: 548,
    clock: '08:07',
    description: '[IND] McDermott Foul: Shooting (3 PF) (1 FTA) (S Foster)',
    home: 86,
    visitor: 77,
    period: 4
  }, {
    event: 550,
    clock: '08:07',
    description: '[MIN] Dieng Substitution replaced by Towns',
    home: 86,
    visitor: 77,
    period: 4
  }, {
    event: 551,
    clock: '08:07',
    description: '[IND] Sabonis Substitution replaced by Oladipo',
    home: 86,
    visitor: 77,
    period: 4
  }, {
    event: 552,
    clock: '08:07',
    description: '[IND] Evans Substitution replaced by Turner',
    home: 86,
    visitor: 77,
    period: 4
  }, {
    event: 553,
    clock: '08:07',
    description: '[IND] Bogdanovic Substitution replaced by Young',
    home: 86,
    visitor: 77,
    period: 4
  }, {
    event: 558,
    clock: '08:07',
    description: '[MIN 87-77] Okogie Free Throw 1 of 1 (9 PTS)',
    home: 87,
    visitor: 77,
    period: 4
  }, {
    event: 559,
    clock: '07:51',
    description: '[IND 79-87] Turner Jump Shot: Made (14 PTS) Assist: Joseph (5 AST)',
    home: 87,
    visitor: 79,
    period: 4
  }, {
    event: 561,
    clock: '07:31',
    description: '[MIN 89-79] Jones Step Back Jump shot: Made (5 PTS)',
    home: 89,
    visitor: 79,
    period: 4
  }, {
    event: 562,
    clock: '07:10',
    description: '[IND] Joseph 3pt Shot: Missed',
    home: 89,
    visitor: 79,
    period: 4
  }, {
    event: 563,
    clock: '07:08',
    description: '[MIN] Jones Rebound (Off:0 Def:3)',
    home: 89,
    visitor: 79,
    period: 4
  }, {
    event: 564,
    clock: '07:00',
    description: '[IND] McDermott Foul: Personal (4 PF) (C Kirkland)',
    home: 89,
    visitor: 79,
    period: 4
  }, {
    event: 566,
    clock: '07:00',
    description: '[IND] McDermott Substitution replaced by Bogdanovic',
    home: 89,
    visitor: 79,
    period: 4
  }, {
    event: 568,
    clock: '06:52',
    description: '[MIN] Jones 3pt Shot: Missed',
    home: 89,
    visitor: 79,
    period: 4
  }, {
    event: 569,
    clock: '06:48',
    description: '[IND] Oladipo Rebound (Off:1 Def:6)',
    home: 89,
    visitor: 79,
    period: 4
  }, {
    event: 570,
    clock: '06:39',
    description: '[IND] Oladipo Driving Layup Shot: Missed',
    home: 89,
    visitor: 79,
    period: 4
  }, {
    event: 572,
    clock: '06:35',
    description: '[MIN] Butler Rebound (Off:2 Def:1)',
    home: 89,
    visitor: 79,
    period: 4
  }, {
    event: 573,
    clock: '06:33',
    description: '[MIN 92-79] Jones 3pt Shot: Made (8 PTS) Assist: Butler (3 AST)',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 575,
    clock: '06:31',
    description: '[IND] Team Timeout : Regular',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 577,
    clock: '06:12',
    description: '[IND] Young Layup Shot: Missed',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 579,
    clock: '06:09',
    description: '[MIN] Towns Rebound (Off:2 Def:11)',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 580,
    clock: '05:56',
    description: '[MIN] Butler Turnover : Bad Pass (3 TO) Steal:Turner (1 ST)',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 582,
    clock: '05:53',
    description: '[MIN] Jones Foul: Personal (1 PF) (A Moyer-Gleich)',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 584,
    clock: '05:47',
    description: '[IND] Oladipo Turnover : Bad Pass (2 TO) Steal:Jones (3 ST)',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 586,
    clock: '05:44',
    description: '[MIN] Towns Foul: Offensive Charge (3 PF) (A Moyer-Gleich)',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 588,
    clock: '05:44',
    description: '[MIN] Towns Turnover : Offensive Foul Turnover (3 TO)',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 590,
    clock: '05:32',
    description: '[IND] Turner Jump Shot: Missed',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 591,
    clock: '05:30',
    description: '[MIN] Jones Rebound (Off:0 Def:4)',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 592,
    clock: '05:26',
    description: '[IND] Turner Foul: Personal (5 PF) (A Moyer-Gleich)',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 594,
    clock: '05:08',
    description: '[MIN] Jones 3pt Shot: Missed',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 595,
    clock: '05:05',
    description: '[IND] Joseph Rebound (Off:0 Def:3)',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 596,
    clock: '04:53',
    description: 'Stoppage: Out-of-Bounds',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 597,
    clock: '04:53',
    description: '[MIN] Jones Substitution replaced by Gibson',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 598,
    clock: '04:53',
    description: '[MIN] Tolliver Substitution replaced by Teague',
    home: 92,
    visitor: 79,
    period: 4
  }, {
    event: 601,
    clock: '04:49',
    description: '[IND 81-92] Bogdanovic Turnaround Fadeaway Bank Jump Shot: Made (17 PTS)',
    home: 92,
    visitor: 81,
    period: 4
  }, {
    event: 602,
    clock: '04:28',
    description: '[MIN 95-81] Okogie 3pt Shot: Made (12 PTS)',
    home: 95,
    visitor: 81,
    period: 4
  }, {
    event: 603,
    clock: '04:14',
    description: '[IND 84-95] Bogdanovic 3pt Shot: Made (20 PTS) Assist: Oladipo (2 AST)',
    home: 95,
    visitor: 84,
    period: 4
  }, {
    event: 605,
    clock: '04:05',
    description: '[IND] Young Foul: Personal (4 PF) (2 FTA) (C Kirkland)',
    home: 95,
    visitor: 84,
    period: 4
  }, {
    event: 607,
    clock: '04:05',
    description: '[MIN 96-84] Towns Free Throw 1 of 2 (16 PTS)',
    home: 96,
    visitor: 84,
    period: 4
  }, {
    event: 608,
    clock: '04:05',
    description: '[MIN] Okogie Substitution replaced by Rose',
    home: 96,
    visitor: 84,
    period: 4
  }, {
    event: 610,
    clock: '04:05',
    description: '[MIN 97-84] Towns Free Throw 2 of 2 (17 PTS)',
    home: 97,
    visitor: 84,
    period: 4
  }, {
    event: 611,
    clock: '03:51',
    description: '[IND 86-97] Young Driving Finger Roll Layup Shot: Made (9 PTS)',
    home: 97,
    visitor: 86,
    period: 4
  }, {
    event: 613,
    clock: '03:31',
    description: '[MIN] Butler Turnover : 3 Second Violation (4 TO)',
    home: 97,
    visitor: 86,
    period: 4
  }, {
    event: 614,
    clock: '03:18',
    description: '[IND] Joseph Pullup Jump shot: Missed',
    home: 97,
    visitor: 86,
    period: 4
  }, {
    event: 615,
    clock: '03:11',
    description: '[IND] Turner Rebound (Off:2 Def:1)',
    home: 97,
    visitor: 86,
    period: 4
  }, {
    event: 616,
    clock: '03:11',
    description: '[IND] Turner Putback Dunk Shot: Missed',
    home: 97,
    visitor: 86,
    period: 4
  }, {
    event: 617,
    clock: '03:08',
    description: '[MIN] Gibson Rebound (Off:1 Def:5)',
    home: 97,
    visitor: 86,
    period: 4
  }, {
    event: 618,
    clock: '02:57',
    description: '[MIN] Teague Foul: Offensive Charge (3 PF) (S Foster)',
    home: 97,
    visitor: 86,
    period: 4
  }, {
    event: 620,
    clock: '02:57',
    description: '[MIN] Teague Turnover : Offensive Foul Turnover (1 TO)',
    home: 97,
    visitor: 86,
    period: 4
  }, {
    event: 621,
    clock: '02:48',
    description: '[IND 88-97] Turner Driving Layup Shot: Made (16 PTS) Assist: Oladipo (3 AST)',
    home: 97,
    visitor: 88,
    period: 4
  }, {
    event: 623,
    clock: '02:31',
    description: '[MIN] Butler Floating Jump shot: Missed',
    home: 97,
    visitor: 88,
    period: 4
  }, {
    event: 624,
    clock: '02:29',
    description: '[MIN] Gibson Rebound (Off:2 Def:5)',
    home: 97,
    visitor: 88,
    period: 4
  }, {
    event: 625,
    clock: '02:18',
    description: '[MIN 99-88] Rose Pullup Jump shot: Made (11 PTS)',
    home: 99,
    visitor: 88,
    period: 4
  }, {
    event: 626,
    clock: '02:03',
    description: '[IND 91-99] Oladipo 3pt Shot: Made (20 PTS)',
    home: 99,
    visitor: 91,
    period: 4
  }, {
    event: 627,
    clock: '01:43',
    description: '[MIN 101-91] Gibson Layup Shot: Made (13 PTS) Assist: Rose (5 AST)',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 629,
    clock: '01:30',
    description: '[IND] Oladipo Turnover : Lost Ball (3 TO) Steal:Butler (1 ST)',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 631,
    clock: '01:29',
    description: '[MIN] Butler Driving Layup Shot: Missed',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 633,
    clock: '01:29',
    description: '[IND] Team Rebound',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 634,
    clock: '01:29',
    description: 'Stoppage: Out-of-Bounds',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 635,
    clock: '01:20',
    description: '[MIN] Towns Foul: Shooting (4 PF) (2 FTA) (C Kirkland)',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 637,
    clock: '01:20',
    description: '[IND] Oladipo Free Throw 1 of 2 Missed',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 638,
    clock: '01:20',
    description: '[IND] Team Rebound',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 639,
    clock: '01:20',
    description: '[IND] Oladipo Free Throw 2 of 2 Missed',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 640,
    clock: '01:20',
    description: '[MIN] Towns Rebound (Off:2 Def:12)',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 641,
    clock: '01:00',
    description: '[MIN] Teague 3pt Shot: Missed',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 642,
    clock: '00:57.2',
    description: '[IND] Young Rebound (Off:3 Def:3)',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 643,
    clock: '00:50.8',
    description: '[IND] Oladipo 3pt Shot: Missed',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 644,
    clock: '00:47.8',
    description: '[MIN] Towns Rebound (Off:2 Def:13)',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 645,
    clock: '00:28.6',
    description: '[MIN] Rose Jump Shot: Missed',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 646,
    clock: '00:25.9',
    description: '[IND] Bogdanovic Rebound (Off:2 Def:3)',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 650,
    clock: '00:23.0',
    description: '[IND] Bogdanovic Running Layup Shot: Missed',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 652,
    clock: '00:22.4',
    description: '[MIN] Team Rebound',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 653,
    clock: '00:22.4',
    description: 'Stoppage: Out-of-Bounds',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 648,
    clock: '00:00.0',
    description: 'End Period',
    home: 101,
    visitor: 91,
    period: 4
  }, {
    event: 649,
    clock: '00:00.0',
    description: 'Game End',
    home: 101,
    visitor: 91,
    period: 4
  }]
}
