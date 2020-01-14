import { DateTime } from 'luxon'

import { BoxScore, PlayByPlay, Scoreboard, Status } from '../../src/types'

export const scoreboard: Scoreboard = {
  id: '1021900044',
  status: Status.postgame,
  date: '20190616',
  time: '1900',
  dateTime: DateTime.fromISO('2019-06-16T19:00:00', { zone: 'America/New_York' }),
  teams: {
    home: {
      id: '1611661324',
      abbr: 'MIN',
      nickname: 'Lynx',
      location: 'Minnesota',
      score: 75,
      record: '4-5'
    },
    visitor: {
      id: '1611661319',
      abbr: 'LVA',
      nickname: 'Aces',
      location: 'Las Vegas',
      score: 80,
      record: '4-3'
    }
  },
  broadcasters: {
    tv: [{
      scope: 'natl',
      team: 'home',
      display: 'NBA TV'
    }, {
      scope: 'local',
      team: 'home',
      display: 'Fox Sports GO (Minnesota)'
    }],
    radio: []
  }
}

export const playByPlay: PlayByPlay = {
  plays: [{
    event: 2,
    clock: '10:00',
    description: 'Start Period',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 4,
    clock: '09:58',
    description: 'Jump Ball Fowles vs Cambage (Robinson gains possession)',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 7,
    clock: '09:40',
    description: '[MIN] Fowles Turnover : Bad Pass (1 TO) Steal:Plum (1 ST)',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 9,
    clock: '09:28',
    description: '[MIN] Fowles Foul: Personal (1 PF)',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 11,
    clock: '09:26',
    description: '[LVA] Wilson Foul: Offensive Charge (1 PF)',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 13,
    clock: '09:26',
    description: '[LVA] Wilson Turnover : Offensive Foul Turnover (1 TO)',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 14,
    clock: '09:14',
    description: '[MIN] Robinson 3pt Shot: Missed',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 15,
    clock: '09:09',
    description: '[LVA] Wilson Rebound (Off:0 Def:1)',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 16,
    clock: '09:07',
    description: '[LVA] Young Turnover : Out of Bounds - Bad Pass Turnover (1 TO)',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 17,
    clock: '08:50',
    description: '[MIN] Dantas Turnaround Jump Shot: Missed',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 18,
    clock: '08:48',
    description: '[MIN] Fowles Rebound (Off:1 Def:0)',
    home: 0,
    visitor: 0,
    period: 1
  }, {
    event: 19,
    clock: '08:46',
    description: '[MIN 2-0] Fowles Reverse Layup Shot: Made (2 PTS)',
    home: 2,
    visitor: 0,
    period: 1
  }, {
    event: 20,
    clock: '08:25',
    description: '[MIN] Dantas Foul: Shooting (1 PF) (2 FTA)',
    home: 2,
    visitor: 0,
    period: 1
  }, {
    event: 22,
    clock: '08:25',
    description: '[LVA 1-2] Wilson Free Throw 1 of 2 (1 PTS)',
    home: 2,
    visitor: 1,
    period: 1
  }, {
    event: 23,
    clock: '08:25',
    description: '[LVA 2-2] Wilson Free Throw 2 of 2 (2 PTS)',
    home: 2,
    visitor: 2,
    period: 1
  }, {
    event: 24,
    clock: '08:12',
    description: '[MIN 5-2] Dantas 3pt Shot: Made (3 PTS) Assist: Sims (1 AST)',
    home: 5,
    visitor: 2,
    period: 1
  }, {
    event: 26,
    clock: '07:52',
    description: '[LVA] Young Running Jump Shot: Missed',
    home: 5,
    visitor: 2,
    period: 1
  }, {
    event: 27,
    clock: '07:49',
    description: '[MIN] Fowles Rebound (Off:1 Def:1)',
    home: 5,
    visitor: 2,
    period: 1
  }, {
    event: 28,
    clock: '07:38',
    description: '[MIN] Sims 3pt Shot: Missed',
    home: 5,
    visitor: 2,
    period: 1
  }, {
    event: 29,
    clock: '07:35',
    description: '[LVA] Cambage Rebound (Off:0 Def:1)',
    home: 5,
    visitor: 2,
    period: 1
  }, {
    event: 30,
    clock: '07:27',
    description: '[LVA] Cambage Turnaround Jump Shot: Missed',
    home: 5,
    visitor: 2,
    period: 1
  }, {
    event: 31,
    clock: '07:23',
    description: '[MIN] Robinson Rebound (Off:0 Def:1)',
    home: 5,
    visitor: 2,
    period: 1
  }, {
    event: 32,
    clock: '07:12',
    description: '[MIN 7-2] Fowles Turnaround Hook Shot: Made (4 PTS)',
    home: 7,
    visitor: 2,
    period: 1
  }, {
    event: 34,
    clock: '06:55',
    description: 'Stoppage: Out-of-Bounds',
    home: 7,
    visitor: 2,
    period: 1
  }, {
    event: 35,
    clock: '06:46',
    description: '[LVA] McBride Turnover : Bad Pass (1 TO) Steal:Fowles (1 ST)',
    home: 7,
    visitor: 2,
    period: 1
  }, {
    event: 37,
    clock: '06:41',
    description: '[MIN 9-2] Sims Running Layup Shot: Made (2 PTS) Assist: Robinson (1 AST)',
    home: 9,
    visitor: 2,
    period: 1
  }, {
    event: 39,
    clock: '06:35',
    description: '[LVA] Team Timeout : Regular',
    home: 9,
    visitor: 2,
    period: 1
  }, {
    event: 40,
    clock: '06:23',
    description: '[LVA 4-9] Plum Pullup Jump shot: Made (2 PTS)',
    home: 9,
    visitor: 4,
    period: 1
  }, {
    event: 41,
    clock: '05:55',
    description: '[MIN] Dantas 3pt Shot: Missed',
    home: 9,
    visitor: 4,
    period: 1
  }, {
    event: 42,
    clock: '05:50',
    description: '[LVA] Wilson Rebound (Off:0 Def:2)',
    home: 9,
    visitor: 4,
    period: 1
  }, {
    event: 43,
    clock: '05:47',
    description: '[LVA] McBride 3pt Shot: Missed',
    home: 9,
    visitor: 4,
    period: 1
  }, {
    event: 44,
    clock: '05:44',
    description: '[MIN] Sims Rebound (Off:0 Def:1)',
    home: 9,
    visitor: 4,
    period: 1
  }, {
    event: 45,
    clock: '05:31',
    description: '[MIN] Robinson 3pt Shot: Missed',
    home: 9,
    visitor: 4,
    period: 1
  }, {
    event: 46,
    clock: '05:27',
    description: '[LVA] Cambage Rebound (Off:0 Def:2)',
    home: 9,
    visitor: 4,
    period: 1
  }, {
    event: 47,
    clock: '05:24',
    description: '[LVA 6-9] McBride Pullup Jump shot: Made (2 PTS)',
    home: 9,
    visitor: 6,
    period: 1
  }, {
    event: 48,
    clock: '05:10',
    description: '[MIN 11-6] Collier Pullup Jump shot: Made (2 PTS) Assist: Dantas (1 AST)',
    home: 11,
    visitor: 6,
    period: 1
  }, {
    event: 50,
    clock: '05:03',
    description: '[LVA] Plum Turnover : Out of Bounds - Bad Pass Turnover (1 TO)',
    home: 11,
    visitor: 6,
    period: 1
  }, {
    event: 51,
    clock: '04:48',
    description: '[MIN 13-6] Collier Turnaround Jump Shot: Made (4 PTS) Assist: Dantas (2 AST)',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 53,
    clock: '04:28',
    description: '[LVA] Cambage Jump Shot: Missed',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 54,
    clock: '04:26',
    description: '[MIN] Fowles Rebound (Off:1 Def:2)',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 55,
    clock: '04:21',
    description: '[MIN] Robinson Turnover : Out of Bounds - Bad Pass Turnover (1 TO)',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 56,
    clock: '04:21',
    description: '[MIN] Fowles Substitution replaced by Coates',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 58,
    clock: '04:14',
    description: '[MIN] Collier Foul: Personal (1 PF)',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 60,
    clock: '04:14',
    description: '[MIN] Robinson Substitution replaced by Brown',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 61,
    clock: '04:14',
    description: '[LVA] Cambage Substitution replaced by Colson',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 62,
    clock: '04:14',
    description: '[LVA] Plum Substitution replaced by Hamby',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 66,
    clock: '04:09',
    description: '[LVA] Colson Driving Layup Shot: Missed',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 67,
    clock: '04:08',
    description: '[MIN] Coates Rebound (Off:0 Def:1)',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 68,
    clock: '04:02',
    description: 'Stoppage: Out-of-Bounds',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 69,
    clock: '03:52',
    description: '[MIN] Sims Jump Shot: Missed',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 70,
    clock: '03:51',
    description: '[MIN] Coates Rebound (Off:1 Def:1)',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 71,
    clock: '03:50',
    description: '[LVA] Young Foul: Personal (1 PF)',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 73,
    clock: '03:50',
    description: '[MIN] Collier Substitution replaced by Christmas-Kelly',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 74,
    clock: '03:50',
    description: '[LVA] Young Substitution replaced by Young',
    home: 13,
    visitor: 6,
    period: 1
  }, {
    event: 77,
    clock: '03:38',
    description: '[MIN 16-6] Dantas 3pt Shot: Made (6 PTS) Assist: Sims (2 AST)',
    home: 16,
    visitor: 6,
    period: 1
  }, {
    event: 79,
    clock: '03:22',
    description: '[LVA] Colson Turnover : Bad Pass (1 TO) Steal:Brown (1 ST)',
    home: 16,
    visitor: 6,
    period: 1
  }, {
    event: 81,
    clock: '03:19',
    description: '[MIN 18-6] Brown Running Layup Shot: Made (2 PTS)',
    home: 18,
    visitor: 6,
    period: 1
  }, {
    event: 82,
    clock: '03:10',
    description: '[LVA] Colson Turnover : Bad Pass (2 TO) Steal:Christmas-Kelly (1 ST)',
    home: 18,
    visitor: 6,
    period: 1
  }, {
    event: 84,
    clock: '03:05',
    description: '[LVA] Hamby Foul: Shooting (1 PF) (2 FTA)',
    home: 18,
    visitor: 6,
    period: 1
  }, {
    event: 88,
    clock: '03:05',
    description: '[MIN] Dantas Substitution replaced by Collier',
    home: 18,
    visitor: 6,
    period: 1
  }, {
    event: 86,
    clock: '03:05',
    description: '[MIN] Sims Free Throw 1 of 2 Missed',
    home: 18,
    visitor: 6,
    period: 1
  }, {
    event: 87,
    clock: '03:05',
    description: '[MIN] Team Rebound',
    home: 18,
    visitor: 6,
    period: 1
  }, {
    event: 90,
    clock: '03:05',
    description: '[MIN 19-6] Sims Free Throw 2 of 2 (3 PTS)',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 91,
    clock: '03:04',
    description: '[LVA] Wilson Turnover : Out of Bounds - Bad Pass Turnover (2 TO)',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 92,
    clock: '02:59',
    description: '[MIN] Collier Jump Shot: Missed',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 93,
    clock: '02:56',
    description: '[MIN] Brown Rebound (Off:1 Def:0)',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 99,
    clock: '02:44',
    description: '[LVA] Hamby Violation:Kicked Ball',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 95,
    clock: '02:44',
    description: '[LVA] Colson Substitution replaced by Plum',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 97,
    clock: '02:40',
    description: '[MIN] Sims Jump Shot: Missed',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 98,
    clock: '02:33',
    description: '[LVA] Hamby Rebound (Off:0 Def:1)',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 100,
    clock: '02:22',
    description: '[LVA] Plum Jump Shot: Missed',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 101,
    clock: '02:19',
    description: '[LVA] Hamby Rebound (Off:1 Def:1)',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 102,
    clock: '02:18',
    description: '[LVA] Wilson Jump Shot: Missed',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 103,
    clock: '02:18',
    description: '[MIN] Collier Rebound (Off:0 Def:1)',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 104,
    clock: '02:02',
    description: '[MIN] Coates Foul: Offensive Charge (1 PF)',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 106,
    clock: '02:02',
    description: '[MIN] Coates Turnover : Offensive Foul Turnover (1 TO)',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 107,
    clock: '02:02',
    description: '[MIN] Sims Substitution replaced by Talbot',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 108,
    clock: '02:02',
    description: '[MIN] Coates Substitution replaced by Fowles',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 109,
    clock: '02:02',
    description: '[LVA] Wilson Substitution replaced by Park',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 113,
    clock: '01:50',
    description: '[LVA] Hamby 3pt Shot: Missed',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 114,
    clock: '01:46',
    description: '[MIN] Fowles Rebound (Off:1 Def:3)',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 115,
    clock: '01:37',
    description: '[MIN] Talbot Pullup Jump shot: Missed',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 116,
    clock: '01:34',
    description: '[LVA] McBride Rebound (Off:0 Def:1)',
    home: 19,
    visitor: 6,
    period: 1
  }, {
    event: 117,
    clock: '01:31',
    description: '[LVA 8-19] McBride Driving Layup Shot: Made (4 PTS)',
    home: 19,
    visitor: 8,
    period: 1
  }, {
    event: 118,
    clock: '01:31',
    description: '[MIN] Talbot Foul: Shooting (1 PF) (1 FTA)',
    home: 19,
    visitor: 8,
    period: 1
  }, {
    event: 120,
    clock: '01:31',
    description: '[LVA] Park Substitution replaced by Cambage',
    home: 19,
    visitor: 8,
    period: 1
  }, {
    event: 122,
    clock: '01:31',
    description: '[LVA 9-19] McBride Free Throw 1 of 1 (5 PTS)',
    home: 19,
    visitor: 9,
    period: 1
  }, {
    event: 123,
    clock: '01:22',
    description: '[LVA] McBride Foul: Personal (1 PF)',
    home: 19,
    visitor: 9,
    period: 1
  }, {
    event: 125,
    clock: '01:12',
    description: '[MIN] Fowles Layup Shot: Missed',
    home: 19,
    visitor: 9,
    period: 1
  }, {
    event: 126,
    clock: '01:10',
    description: '[LVA] Young Rebound (Off:0 Def:1)',
    home: 19,
    visitor: 9,
    period: 1
  }, {
    event: 127,
    clock: '01:03',
    description: '[LVA] Young Turnover : Backcourt Turnover (1 TO)',
    home: 19,
    visitor: 9,
    period: 1
  }, {
    event: 128,
    clock: '00:47.7',
    description: '[MIN] Collier Turnover : Out of Bounds - Bad Pass Turnover (1 TO)',
    home: 19,
    visitor: 9,
    period: 1
  }, {
    event: 129,
    clock: '00:38.1',
    description: '[LVA 11-19] McBride Jump Shot: Made (7 PTS) Assist: Young (1 AST)',
    home: 19,
    visitor: 11,
    period: 1
  }, {
    event: 131,
    clock: '00:31.9',
    description: 'Stoppage: Out-of-Bounds',
    home: 19,
    visitor: 11,
    period: 1
  }, {
    event: 132,
    clock: '00:31.9',
    description: '[MIN] Talbot Substitution replaced by Robinson',
    home: 19,
    visitor: 11,
    period: 1
  }, {
    event: 134,
    clock: '00:31.9',
    description: '[MIN] Collier Substitution replaced by Dantas',
    home: 19,
    visitor: 11,
    period: 1
  }, {
    event: 136,
    clock: '00:24.5',
    description: '[MIN] Brown 3pt Shot: Missed',
    home: 19,
    visitor: 11,
    period: 1
  }, {
    event: 137,
    clock: '00:20.8',
    description: '[LVA] Hamby Rebound (Off:1 Def:2)',
    home: 19,
    visitor: 11,
    period: 1
  }, {
    event: 138,
    clock: '00:03.7',
    description: '[LVA] Plum 3pt Shot: Missed',
    home: 19,
    visitor: 11,
    period: 1
  }, {
    event: 139,
    clock: '00:00.2',
    description: '[MIN] Fowles Rebound (Off:1 Def:4)',
    home: 19,
    visitor: 11,
    period: 1
  }, {
    event: 140,
    clock: '00:00.0',
    description: 'End Period',
    home: 19,
    visitor: 11,
    period: 1
  }, {
    event: 144,
    clock: '10:00',
    description: 'Start Period',
    home: 19,
    visitor: 11,
    period: 2
  }, {
    event: 145,
    clock: '09:43',
    description: '[LVA] Rodgers Jump Shot: Missed',
    home: 19,
    visitor: 11,
    period: 2
  }, {
    event: 146,
    clock: '09:40',
    description: '[MIN] Christmas-Kelly Rebound (Off:0 Def:1)',
    home: 19,
    visitor: 11,
    period: 2
  }, {
    event: 147,
    clock: '09:20',
    description: '[MIN] Christmas-Kelly Jump Shot: Missed',
    home: 19,
    visitor: 11,
    period: 2
  }, {
    event: 148,
    clock: '09:17',
    description: '[LVA] Young Rebound (Off:0 Def:2)',
    home: 19,
    visitor: 11,
    period: 2
  }, {
    event: 149,
    clock: '09:11',
    description: '[LVA] Rodgers Turnover : Step Out of Bounds Turnover (1 TO)',
    home: 19,
    visitor: 11,
    period: 2
  }, {
    event: 150,
    clock: '08:55',
    description: '[MIN 22-11] Robinson 3pt Shot: Made (3 PTS) Assist: Dantas (3 AST)',
    home: 22,
    visitor: 11,
    period: 2
  }, {
    event: 152,
    clock: '08:35',
    description: '[LVA] Hamby 3pt Shot: Missed',
    home: 22,
    visitor: 11,
    period: 2
  }, {
    event: 153,
    clock: '08:33',
    description: '[MIN] Christmas-Kelly Rebound (Off:0 Def:2)',
    home: 22,
    visitor: 11,
    period: 2
  }, {
    event: 154,
    clock: '08:25',
    description: '[MIN 24-11] Robinson Driving Layup Shot: Made (5 PTS)',
    home: 24,
    visitor: 11,
    period: 2
  }, {
    event: 155,
    clock: '08:25',
    description: '[LVA] Plum Foul: Shooting (1 PF) (1 FTA)',
    home: 24,
    visitor: 11,
    period: 2
  }, {
    event: 157,
    clock: '08:25',
    description: '[LVA] Hamby Substitution replaced by Wilson',
    home: 24,
    visitor: 11,
    period: 2
  }, {
    event: 159,
    clock: '08:25',
    description: '[MIN 25-11] Robinson Free Throw 1 of 1 (6 PTS)',
    home: 25,
    visitor: 11,
    period: 2
  }, {
    event: 160,
    clock: '08:11',
    description: '[LVA 14-25] Plum 3pt Shot: Made (5 PTS) Assist: Rodgers (1 AST)',
    home: 25,
    visitor: 14,
    period: 2
  }, {
    event: 162,
    clock: '07:48',
    description: '[MIN] Christmas-Kelly 3pt Shot: Missed',
    home: 25,
    visitor: 14,
    period: 2
  }, {
    event: 163,
    clock: '07:46',
    description: '[LVA] Cambage Rebound (Off:0 Def:3)',
    home: 25,
    visitor: 14,
    period: 2
  }, {
    event: 164,
    clock: '07:40',
    description: '[LVA 17-25] Plum 3pt Shot: Made (8 PTS) Assist: Rodgers (2 AST)',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 166,
    clock: '07:19',
    description: '[MIN] Brown 3pt Shot: Missed',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 167,
    clock: '07:17',
    description: '[LVA] Cambage Rebound (Off:0 Def:4)',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 170,
    clock: '07:15',
    description: '[LVA] Plum Foul: Offensive Charge (2 PF)',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 172,
    clock: '07:15',
    description: '[LVA] Plum Turnover : Offensive Foul Turnover (2 TO)',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 173,
    clock: '07:15',
    description: '[MIN] Christmas-Kelly Substitution replaced by Collier',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 174,
    clock: '07:15',
    description: '[MIN] Brown Substitution replaced by Sims',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 177,
    clock: '07:01',
    description: '[MIN] Robinson 3pt Shot: Missed',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 178,
    clock: '06:57',
    description: '[LVA] Cambage Rebound (Off:0 Def:5)',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 179,
    clock: '06:50',
    description: '[LVA] Cambage 3pt Shot: Missed',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 180,
    clock: '06:46',
    description: '[MIN] Team Rebound',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 181,
    clock: '06:46',
    description: 'Stoppage: Out-of-Bounds',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 182,
    clock: '06:33',
    description: '[MIN] Collier Turnover : Out of Bounds Lost Ball Turnover (2 TO)',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 183,
    clock: '06:22',
    description: '[MIN] Fowles Foul: Shooting (2 PF) (2 FTA)',
    home: 25,
    visitor: 17,
    period: 2
  }, {
    event: 185,
    clock: '06:22',
    description: '[LVA 18-25] Cambage Free Throw 1 of 2 (1 PTS)',
    home: 25,
    visitor: 18,
    period: 2
  }, {
    event: 186,
    clock: '06:22',
    description: '[LVA 19-25] Cambage Free Throw 2 of 2 (2 PTS)',
    home: 25,
    visitor: 19,
    period: 2
  }, {
    event: 187,
    clock: '06:11',
    description: '[MIN 28-19] Dantas 3pt Shot: Made (9 PTS) Assist: Robinson (2 AST)',
    home: 28,
    visitor: 19,
    period: 2
  }, {
    event: 189,
    clock: '05:58',
    description: '[LVA] Young Jump Shot: Missed',
    home: 28,
    visitor: 19,
    period: 2
  }, {
    event: 190,
    clock: '05:56',
    description: '[MIN] Fowles Rebound (Off:1 Def:5)',
    home: 28,
    visitor: 19,
    period: 2
  }, {
    event: 191,
    clock: '05:45',
    description: '[MIN 31-19] Sims 3pt Shot: Made (6 PTS) Assist: Collier (1 AST)',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 193,
    clock: '05:30',
    description: '[LVA] Young Turnover : Out of Bounds - Bad Pass Turnover (2 TO)',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 194,
    clock: '05:30',
    description: 'Timeout Officials',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 195,
    clock: '05:30',
    description: '[LVA] Young Substitution replaced by McBride',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 196,
    clock: '05:30',
    description: '[LVA] Rodgers Substitution replaced by Young',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 199,
    clock: '05:14',
    description: '[MIN] Fowles Turnaround Jump Shot: Missed',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 201,
    clock: '05:13',
    description: '[LVA] Cambage Rebound (Off:0 Def:6)',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 202,
    clock: '05:11',
    description: '[LVA] Cambage Turnover : Bad Pass (1 TO) Steal:Collier (1 ST)',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 204,
    clock: '05:09',
    description: '[MIN] Collier Turnover : Out of Bounds Lost Ball Turnover (3 TO)',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 205,
    clock: '05:00',
    description: '[LVA] McBride Jump Shot: Missed',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 206,
    clock: '05:00',
    description: '[LVA] Wilson Rebound (Off:1 Def:2)',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 207,
    clock: '04:54',
    description: '[LVA] Young Driving Layup Shot: Missed',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 209,
    clock: '04:54',
    description: '[LVA] Team Rebound',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 210,
    clock: '04:54',
    description: 'Stoppage: Out-of-Bounds',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 211,
    clock: '04:52',
    description: '[MIN] Dantas Foul: Shooting (2 PF) (2 FTA)',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 213,
    clock: '04:52',
    description: '[LVA] McBride Free Throw 1 of 2 Missed',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 214,
    clock: '04:52',
    description: '[LVA] Team Rebound',
    home: 31,
    visitor: 19,
    period: 2
  }, {
    event: 215,
    clock: '04:52',
    description: '[LVA 20-31] McBride Free Throw 2 of 2 (8 PTS)',
    home: 31,
    visitor: 20,
    period: 2
  }, {
    event: 216,
    clock: '04:42',
    description: '[MIN] Sims Turnover : Bad Pass (1 TO) Steal:Young (1 ST)',
    home: 31,
    visitor: 20,
    period: 2
  }, {
    event: 218,
    clock: '04:32',
    description: '[MIN] Robinson Foul: Shooting (1 PF) (2 FTA)',
    home: 31,
    visitor: 20,
    period: 2
  }, {
    event: 220,
    clock: '04:32',
    description: '[LVA 21-31] Wilson Free Throw 1 of 2 (3 PTS)',
    home: 31,
    visitor: 21,
    period: 2
  }, {
    event: 221,
    clock: '04:32',
    description: '[MIN] Fowles Substitution replaced by Coates',
    home: 31,
    visitor: 21,
    period: 2
  }, {
    event: 223,
    clock: '04:32',
    description: '[LVA 22-31] Wilson Free Throw 2 of 2 (4 PTS)',
    home: 31,
    visitor: 22,
    period: 2
  }, {
    event: 224,
    clock: '04:21',
    description: '[MIN] Dantas 3pt Shot: Missed',
    home: 31,
    visitor: 22,
    period: 2
  }, {
    event: 225,
    clock: '04:18',
    description: '[LVA] McBride Rebound (Off:0 Def:2)',
    home: 31,
    visitor: 22,
    period: 2
  }, {
    event: 226,
    clock: '04:11',
    description: '[LVA] Young Jump Shot: Missed',
    home: 31,
    visitor: 22,
    period: 2
  }, {
    event: 227,
    clock: '04:08',
    description: '[MIN] Dantas Rebound (Off:0 Def:1)',
    home: 31,
    visitor: 22,
    period: 2
  }, {
    event: 228,
    clock: '03:59',
    description: '[MIN 33-22] Robinson Driving Layup Shot: Made (8 PTS)',
    home: 33,
    visitor: 22,
    period: 2
  }, {
    event: 229,
    clock: '03:44',
    description: '[LVA] Plum Pullup Jump shot: Missed',
    home: 33,
    visitor: 22,
    period: 2
  }, {
    event: 230,
    clock: '03:41',
    description: '[MIN] Collier Rebound (Off:0 Def:2)',
    home: 33,
    visitor: 22,
    period: 2
  }, {
    event: 231,
    clock: '03:29',
    description: '[MIN] Sims Turnover : Lost Ball (2 TO) Steal:Young (2 ST)',
    home: 33,
    visitor: 22,
    period: 2
  }, {
    event: 233,
    clock: '03:24',
    description: '[LVA 24-33] Plum Running Layup Shot: Made (10 PTS) Assist: Young (1 AST)',
    home: 33,
    visitor: 24,
    period: 2
  }, {
    event: 235,
    clock: '02:57',
    description: '[MIN] Dantas 3pt Shot: Missed',
    home: 33,
    visitor: 24,
    period: 2
  }, {
    event: 236,
    clock: '02:54',
    description: '[LVA] Young Rebound (Off:0 Def:1)',
    home: 33,
    visitor: 24,
    period: 2
  }, {
    event: 237,
    clock: '02:49',
    description: '[LVA] Young Jump Shot: Missed',
    home: 33,
    visitor: 24,
    period: 2
  }, {
    event: 239,
    clock: '02:48',
    description: '[MIN] Robinson Rebound (Off:0 Def:2)',
    home: 33,
    visitor: 24,
    period: 2
  }, {
    event: 241,
    clock: '02:44',
    description: '[LVA] Cambage Foul: Shooting (1 PF) (2 FTA)',
    home: 33,
    visitor: 24,
    period: 2
  }, {
    event: 243,
    clock: '02:44',
    description: '[MIN] Team Timeout : Regular',
    home: 33,
    visitor: 24,
    period: 2
  }, {
    event: 244,
    clock: '02:44',
    description: '[MIN] Dantas Substitution replaced by Christmas-Kelly',
    home: 33,
    visitor: 24,
    period: 2
  }, {
    event: 245,
    clock: '02:44',
    description: '[LVA] Young Substitution replaced by Hamby',
    home: 33,
    visitor: 24,
    period: 2
  }, {
    event: 246,
    clock: '02:44',
    description: '[LVA] Cambage Substitution replaced by Colson',
    home: 33,
    visitor: 24,
    period: 2
  }, {
    event: 250,
    clock: '02:44',
    description: '[MIN 34-24] Sims Free Throw 1 of 2 (7 PTS)',
    home: 34,
    visitor: 24,
    period: 2
  }, {
    event: 251,
    clock: '02:44',
    description: '[MIN 35-24] Sims Free Throw 2 of 2 (8 PTS)',
    home: 35,
    visitor: 24,
    period: 2
  }, {
    event: 252,
    clock: '02:31',
    description: '[LVA] McBride Turnover : Bad Pass (2 TO) Steal:Coates (1 ST)',
    home: 35,
    visitor: 24,
    period: 2
  }, {
    event: 254,
    clock: '02:26',
    description: 'Stoppage: Out-of-Bounds',
    home: 35,
    visitor: 24,
    period: 2
  }, {
    event: 255,
    clock: '02:08',
    description: '[MIN] Collier 3pt Shot: Missed',
    home: 35,
    visitor: 24,
    period: 2
  }, {
    event: 256,
    clock: '02:06',
    description: '[LVA] McBride Rebound (Off:0 Def:3)',
    home: 35,
    visitor: 24,
    period: 2
  }, {
    event: 257,
    clock: '02:01',
    description: '[LVA 27-35] Plum 3pt Shot: Made (13 PTS) Assist: McBride (1 AST)',
    home: 35,
    visitor: 27,
    period: 2
  }, {
    event: 260,
    clock: '01:40',
    description: '[MIN 37-27] Coates Cutting Layup Shot: Made (2 PTS) Assist: Christmas-Kelly (1 AST)',
    home: 37,
    visitor: 27,
    period: 2
  }, {
    event: 262,
    clock: '01:28',
    description: '[LVA] Plum Driving Layup Shot: Missed',
    home: 37,
    visitor: 27,
    period: 2
  }, {
    event: 263,
    clock: '01:25',
    description: '[LVA] Wilson Rebound (Off:2 Def:2)',
    home: 37,
    visitor: 27,
    period: 2
  }, {
    event: 264,
    clock: '01:24',
    description: '[LVA 29-37] Wilson Putback Layup Shot: Made (6 PTS)',
    home: 37,
    visitor: 29,
    period: 2
  }, {
    event: 265,
    clock: '01:10',
    description: '[MIN] Sims 3pt Shot: Missed',
    home: 37,
    visitor: 29,
    period: 2
  }, {
    event: 266,
    clock: '01:06',
    description: '[LVA] Hamby Rebound (Off:1 Def:3)',
    home: 37,
    visitor: 29,
    period: 2
  }, {
    event: 267,
    clock: '00:59.0',
    description: '[MIN] Christmas-Kelly Foul: Personal (1 PF)',
    home: 37,
    visitor: 29,
    period: 2
  }, {
    event: 269,
    clock: '00:55.3',
    description: '[MIN] Collier Foul: Personal (2 PF) (2 FTA)',
    home: 37,
    visitor: 29,
    period: 2
  }, {
    event: 271,
    clock: '00:55.3',
    description: '[LVA 30-37] Colson Free Throw 1 of 2 (1 PTS)',
    home: 37,
    visitor: 30,
    period: 2
  }, {
    event: 272,
    clock: '00:55.3',
    description: '[MIN] Collier Substitution replaced by Dantas',
    home: 37,
    visitor: 30,
    period: 2
  }, {
    event: 273,
    clock: '00:55.3',
    description: '[LVA] Plum Substitution replaced by Young',
    home: 37,
    visitor: 30,
    period: 2
  }, {
    event: 276,
    clock: '00:55.3',
    description: '[LVA 31-37] Colson Free Throw 2 of 2 (2 PTS)',
    home: 37,
    visitor: 31,
    period: 2
  }, {
    event: 277,
    clock: '00:40.7',
    description: '[MIN 39-31] Coates Layup Shot: Made (4 PTS) Assist: Christmas-Kelly (2 AST)',
    home: 39,
    visitor: 31,
    period: 2
  }, {
    event: 279,
    clock: '00:30.3',
    description: 'Stoppage: Out-of-Bounds',
    home: 39,
    visitor: 31,
    period: 2
  }, {
    event: 280,
    clock: '00:28.7',
    description: '[MIN] Christmas-Kelly Foul: Shooting (2 PF) (2 FTA)',
    home: 39,
    visitor: 31,
    period: 2
  }, {
    event: 282,
    clock: '00:28.7',
    description: '[LVA 32-39] McBride Free Throw 1 of 2 (9 PTS)',
    home: 39,
    visitor: 32,
    period: 2
  }, {
    event: 283,
    clock: '00:28.7',
    description: '[MIN] Christmas-Kelly Substitution replaced by Talbot',
    home: 39,
    visitor: 32,
    period: 2
  }, {
    event: 285,
    clock: '00:28.7',
    description: '[LVA 33-39] McBride Free Throw 2 of 2 (10 PTS)',
    home: 39,
    visitor: 33,
    period: 2
  }, {
    event: 286,
    clock: '00:10.4',
    description: '[MIN] Robinson Driving Layup Shot: Missed',
    home: 39,
    visitor: 33,
    period: 2
  }, {
    event: 288,
    clock: '00:09.7',
    description: '[MIN] Team Rebound',
    home: 39,
    visitor: 33,
    period: 2
  }, {
    event: 289,
    clock: '00:09.7',
    description: 'Stoppage: Out-of-Bounds',
    home: 39,
    visitor: 33,
    period: 2
  }, {
    event: 290,
    clock: '00:08.2',
    description: '[MIN] Robinson Turnover : Bad Pass (2 TO) Steal:Hamby (1 ST)',
    home: 39,
    visitor: 33,
    period: 2
  }, {
    event: 292,
    clock: '00:04.7',
    description: '[LVA 35-39] Hamby Running Layup Shot: Made (2 PTS)',
    home: 39,
    visitor: 35,
    period: 2
  }, {
    event: 293,
    clock: '00:01.0',
    description: '[MIN] Talbot 3pt Shot: Missed',
    home: 39,
    visitor: 35,
    period: 2
  }, {
    event: 294,
    clock: '00:01.0',
    description: '[MIN] Team Rebound',
    home: 39,
    visitor: 35,
    period: 2
  }, {
    event: 295,
    clock: '00:00.0',
    description: 'End Period',
    home: 39,
    visitor: 35,
    period: 2
  }, {
    event: 304,
    clock: '10:00',
    description: 'Start Period',
    home: 39,
    visitor: 35,
    period: 3
  }, {
    event: 305,
    clock: '09:43',
    description: '[LVA] Cambage Turnaround Jump Shot: Missed',
    home: 39,
    visitor: 35,
    period: 3
  }, {
    event: 306,
    clock: '09:40',
    description: '[MIN] Sims Rebound (Off:0 Def:2)',
    home: 39,
    visitor: 35,
    period: 3
  }, {
    event: 307,
    clock: '09:18',
    description: '[MIN] Robinson Jump Shot: Missed',
    home: 39,
    visitor: 35,
    period: 3
  }, {
    event: 308,
    clock: '09:16',
    description: '[LVA] Wilson Rebound (Off:2 Def:3)',
    home: 39,
    visitor: 35,
    period: 3
  }, {
    event: 309,
    clock: '09:02',
    description: '[MIN] Collier Foul: Shooting (3 PF) (2 FTA)',
    home: 39,
    visitor: 35,
    period: 3
  }, {
    event: 312,
    clock: '09:02',
    description: '[LVA] Wilson Free Throw 1 of 2 Missed',
    home: 39,
    visitor: 35,
    period: 3
  }, {
    event: 313,
    clock: '09:02',
    description: '[LVA] Team Rebound',
    home: 39,
    visitor: 35,
    period: 3
  }, {
    event: 314,
    clock: '09:02',
    description: '[LVA 36-39] Wilson Free Throw 2 of 2 (7 PTS)',
    home: 39,
    visitor: 36,
    period: 3
  }, {
    event: 315,
    clock: '08:47',
    description: '[MIN] Fowles Turnaround Jump Shot: Missed',
    home: 39,
    visitor: 36,
    period: 3
  }, {
    event: 316,
    clock: '08:45',
    description: '[LVA] Cambage Rebound (Off:0 Def:7)',
    home: 39,
    visitor: 36,
    period: 3
  }, {
    event: 317,
    clock: '08:37',
    description: '[LVA] Wilson Jump Shot: Missed',
    home: 39,
    visitor: 36,
    period: 3
  }, {
    event: 318,
    clock: '08:35',
    description: '[MIN] Fowles Rebound (Off:1 Def:6)',
    home: 39,
    visitor: 36,
    period: 3
  }, {
    event: 319,
    clock: '08:30',
    description: '[MIN] Sims Driving Layup Shot: Missed',
    home: 39,
    visitor: 36,
    period: 3
  }, {
    event: 320,
    clock: '08:28',
    description: '[LVA] Young Rebound (Off:0 Def:2)',
    home: 39,
    visitor: 36,
    period: 3
  }, {
    event: 321,
    clock: '08:21',
    description: '[MIN] Dantas Foul: Shooting (3 PF) (2 FTA)',
    home: 39,
    visitor: 36,
    period: 3
  }, {
    event: 323,
    clock: '08:21',
    description: '[LVA 37-39] Wilson Free Throw 1 of 2 (8 PTS)',
    home: 39,
    visitor: 37,
    period: 3
  }, {
    event: 324,
    clock: '08:21',
    description: '[LVA 38-39] Wilson Free Throw 2 of 2 (9 PTS)',
    home: 39,
    visitor: 38,
    period: 3
  }, {
    event: 325,
    clock: '08:09',
    description: '[MIN] Fowles Turnaround Jump Shot: Missed',
    home: 39,
    visitor: 38,
    period: 3
  }, {
    event: 326,
    clock: '08:07',
    description: '[LVA] Plum Rebound (Off:0 Def:1)',
    home: 39,
    visitor: 38,
    period: 3
  }, {
    event: 327,
    clock: '07:52',
    description: '[LVA] McBride 3pt Shot: Missed',
    home: 39,
    visitor: 38,
    period: 3
  }, {
    event: 328,
    clock: '07:49',
    description: '[LVA] Plum Rebound (Off:1 Def:1)',
    home: 39,
    visitor: 38,
    period: 3
  }, {
    event: 329,
    clock: '07:39',
    description: '[LVA] Cambage Turnover : 3 Second Violation (2 TO)',
    home: 39,
    visitor: 38,
    period: 3
  }, {
    event: 330,
    clock: '07:22',
    description: '[MIN 41-38] Sims Driving Layup Shot: Made (10 PTS) Assist: Dantas (4 AST)',
    home: 41,
    visitor: 38,
    period: 3
  }, {
    event: 332,
    clock: '07:12',
    description: '[LVA] Plum Turnover : Out of Bounds Lost Ball Turnover (3 TO)',
    home: 41,
    visitor: 38,
    period: 3
  }, {
    event: 333,
    clock: '07:00',
    description: '[MIN 44-38] Dantas 3pt Shot: Made (12 PTS) Assist: Sims (3 AST)',
    home: 44,
    visitor: 38,
    period: 3
  }, {
    event: 335,
    clock: '06:46',
    description: '[MIN] Fowles Foul: Personal (3 PF)',
    home: 44,
    visitor: 38,
    period: 3
  }, {
    event: 337,
    clock: '06:46',
    description: '[LVA] Young Substitution replaced by Rodgers',
    home: 44,
    visitor: 38,
    period: 3
  }, {
    event: 339,
    clock: '06:37',
    description: '[LVA 40-44] Cambage Running Jump Shot: Made (4 PTS)',
    home: 44,
    visitor: 40,
    period: 3
  }, {
    event: 340,
    clock: '06:18',
    description: '[MIN 46-40] Collier Jump Shot: Made (6 PTS) Assist: Dantas (5 AST)',
    home: 46,
    visitor: 40,
    period: 3
  }, {
    event: 342,
    clock: '06:10',
    description: '[LVA] Plum 3pt Shot: Missed',
    home: 46,
    visitor: 40,
    period: 3
  }, {
    event: 343,
    clock: '06:06',
    description: '[LVA] Wilson Rebound (Off:3 Def:3)',
    home: 46,
    visitor: 40,
    period: 3
  }, {
    event: 344,
    clock: '05:57',
    description: '[LVA] Plum Pullup Jump shot: Missed',
    home: 46,
    visitor: 40,
    period: 3
  }, {
    event: 345,
    clock: '05:54',
    description: '[MIN] Collier Rebound (Off:0 Def:3)',
    home: 46,
    visitor: 40,
    period: 3
  }, {
    event: 346,
    clock: '05:39',
    description: '[MIN] Robinson Pullup Jump shot: Missed',
    home: 46,
    visitor: 40,
    period: 3
  }, {
    event: 347,
    clock: '05:34',
    description: '[LVA] Rodgers Rebound (Off:0 Def:1)',
    home: 46,
    visitor: 40,
    period: 3
  }, {
    event: 348,
    clock: '05:28',
    description: '[LVA 42-46] Wilson Pullup Jump shot: Made (11 PTS) Assist: Rodgers (3 AST)',
    home: 46,
    visitor: 42,
    period: 3
  }, {
    event: 350,
    clock: '05:15',
    description: '[LVA] Wilson Foul: Shooting (2 PF) (2 FTA)',
    home: 46,
    visitor: 42,
    period: 3
  }, {
    event: 352,
    clock: '05:15',
    description: '[MIN 47-42] Sims Free Throw 1 of 2 (11 PTS)',
    home: 47,
    visitor: 42,
    period: 3
  }, {
    event: 353,
    clock: '05:15',
    description: '[MIN] Robinson Substitution replaced by Brown',
    home: 47,
    visitor: 42,
    period: 3
  }, {
    event: 354,
    clock: '05:15',
    description: '[MIN] Fowles Substitution replaced by Coates',
    home: 47,
    visitor: 42,
    period: 3
  }, {
    event: 357,
    clock: '05:15',
    description: '[MIN 48-42] Sims Free Throw 2 of 2 (12 PTS)',
    home: 48,
    visitor: 42,
    period: 3
  }, {
    event: 358,
    clock: '05:01',
    description: '[LVA 44-48] Cambage Cutting Layup Shot: Made (6 PTS) Assist: Wilson (1 AST)',
    home: 48,
    visitor: 44,
    period: 3
  }, {
    event: 360,
    clock: '04:46',
    description: '[MIN 51-44] Dantas 3pt Shot: Made (15 PTS) Assist: Collier (2 AST)',
    home: 51,
    visitor: 44,
    period: 3
  }, {
    event: 362,
    clock: '04:25',
    description: '[LVA] Cambage Jump Shot: Missed',
    home: 51,
    visitor: 44,
    period: 3
  }, {
    event: 363,
    clock: '04:22',
    description: '[MIN] Brown Rebound (Off:1 Def:1)',
    home: 51,
    visitor: 44,
    period: 3
  }, {
    event: 364,
    clock: '04:04',
    description: '[MIN] Dantas 3pt Shot: Missed',
    home: 51,
    visitor: 44,
    period: 3
  }, {
    event: 365,
    clock: '04:00',
    description: '[LVA] Plum Rebound (Off:1 Def:2)',
    home: 51,
    visitor: 44,
    period: 3
  }, {
    event: 366,
    clock: '03:54',
    description: '[LVA] Cambage Layup Shot: Missed',
    home: 51,
    visitor: 44,
    period: 3
  }, {
    event: 368,
    clock: '03:52',
    description: '[MIN] Collier Rebound (Off:0 Def:4)',
    home: 51,
    visitor: 44,
    period: 3
  }, {
    event: 369,
    clock: '03:37',
    description: '[LVA] Cambage Foul: Shooting (2 PF) (2 FTA)',
    home: 51,
    visitor: 44,
    period: 3
  }, {
    event: 371,
    clock: '03:37',
    description: 'Timeout Officials',
    home: 51,
    visitor: 44,
    period: 3
  }, {
    event: 372,
    clock: '03:37',
    description: '[LVA] Cambage Substitution replaced by Hamby',
    home: 51,
    visitor: 44,
    period: 3
  }, {
    event: 374,
    clock: '03:37',
    description: '[MIN 52-44] Sims Free Throw 1 of 2 (13 PTS)',
    home: 52,
    visitor: 44,
    period: 3
  }, {
    event: 375,
    clock: '03:37',
    description: '[MIN 53-44] Sims Free Throw 2 of 2 (14 PTS)',
    home: 53,
    visitor: 44,
    period: 3
  }, {
    event: 376,
    clock: '03:25',
    description: '[LVA 46-53] McBride Driving Layup Shot: Made (12 PTS)',
    home: 53,
    visitor: 46,
    period: 3
  }, {
    event: 377,
    clock: '03:06',
    description: '[MIN] Coates Layup Shot: Missed',
    home: 53,
    visitor: 46,
    period: 3
  }, {
    event: 378,
    clock: '03:03',
    description: '[MIN] Dantas Rebound (Off:1 Def:1)',
    home: 53,
    visitor: 46,
    period: 3
  }, {
    event: 379,
    clock: '03:00',
    description: '[MIN 56-46] Brown 3pt Shot: Made (5 PTS) Assist: Sims (4 AST)',
    home: 56,
    visitor: 46,
    period: 3
  }, {
    event: 381,
    clock: '02:42',
    description: '[LVA 48-56] Wilson Finger Roll Layup Shot: Made (13 PTS)',
    home: 56,
    visitor: 48,
    period: 3
  }, {
    event: 382,
    clock: '02:25',
    description: '[MIN] Collier Layup Shot: Missed',
    home: 56,
    visitor: 48,
    period: 3
  }, {
    event: 384,
    clock: '02:22',
    description: '[LVA] McBride Rebound (Off:0 Def:4)',
    home: 56,
    visitor: 48,
    period: 3
  }, {
    event: 385,
    clock: '02:18',
    description: '[LVA 51-56] McBride 3pt Shot: Made (15 PTS) Assist: Plum (1 AST)',
    home: 56,
    visitor: 51,
    period: 3
  }, {
    event: 387,
    clock: '01:52',
    description: '[MIN] Coates Layup Shot: Missed',
    home: 56,
    visitor: 51,
    period: 3
  }, {
    event: 389,
    clock: '01:49',
    description: '[LVA] Wilson Rebound (Off:3 Def:4)',
    home: 56,
    visitor: 51,
    period: 3
  }, {
    event: 390,
    clock: '01:44',
    description: '[LVA] McBride Step Back Jump shot: Missed',
    home: 56,
    visitor: 51,
    period: 3
  }, {
    event: 391,
    clock: '01:41',
    description: '[LVA] Hamby Rebound (Off:2 Def:3)',
    home: 56,
    visitor: 51,
    period: 3
  }, {
    event: 392,
    clock: '01:40',
    description: '[LVA 54-56] Plum 3pt Shot: Made (16 PTS) Assist: Hamby (1 AST)',
    home: 56,
    visitor: 54,
    period: 3
  }, {
    event: 394,
    clock: '01:39',
    description: '[MIN] Team Timeout : Regular',
    home: 56,
    visitor: 54,
    period: 3
  }, {
    event: 395,
    clock: '01:39',
    description: '[MIN] Dantas Substitution replaced by Fowles',
    home: 56,
    visitor: 54,
    period: 3
  }, {
    event: 396,
    clock: '01:39',
    description: '[LVA] McBride Substitution replaced by Cambage',
    home: 56,
    visitor: 54,
    period: 3
  }, {
    event: 397,
    clock: '01:39',
    description: '[LVA] Wilson Substitution replaced by Young',
    home: 56,
    visitor: 54,
    period: 3
  }, {
    event: 401,
    clock: '01:25',
    description: '[MIN 58-54] Fowles Reverse Layup Shot: Made (6 PTS) Assist: Sims (5 AST)',
    home: 58,
    visitor: 54,
    period: 3
  }, {
    event: 403,
    clock: '00:57.5',
    description: '[LVA] Plum Step Back Jump shot: Missed',
    home: 58,
    visitor: 54,
    period: 3
  }, {
    event: 404,
    clock: '00:55.2',
    description: '[LVA] Team Rebound',
    home: 58,
    visitor: 54,
    period: 3
  }, {
    event: 405,
    clock: '00:55.2',
    description: 'Stoppage Other',
    home: 58,
    visitor: 54,
    period: 3
  }, {
    event: 406,
    clock: '00:47.5',
    description: '[MIN] Coates Foul: Shooting (2 PF) (2 FTA)',
    home: 58,
    visitor: 54,
    period: 3
  }, {
    event: 408,
    clock: '00:47.5',
    description: '[LVA 55-58] Hamby Free Throw 1 of 2 (3 PTS)',
    home: 58,
    visitor: 55,
    period: 3
  }, {
    event: 409,
    clock: '00:47.5',
    description: '[LVA] Hamby Free Throw 2 of 2 Missed',
    home: 58,
    visitor: 55,
    period: 3
  }, {
    event: 410,
    clock: '00:44.6',
    description: '[MIN] Coates Rebound (Off:1 Def:2)',
    home: 58,
    visitor: 55,
    period: 3
  }, {
    event: 411,
    clock: '00:38.2',
    description: '[MIN] Sims Driving Layup Shot: Missed',
    home: 58,
    visitor: 55,
    period: 3
  }, {
    event: 412,
    clock: '00:35.5',
    description: '[LVA] Hamby Rebound (Off:2 Def:4)',
    home: 58,
    visitor: 55,
    period: 3
  }, {
    event: 413,
    clock: '00:32.4',
    description: '[LVA 58-58] Rodgers 3pt Shot: Made (3 PTS) Assist: Hamby (2 AST)',
    home: 58,
    visitor: 58,
    period: 3
  }, {
    event: 414,
    clock: '00:17.7',
    description: '[LVA] Plum Foul: Personal (3 PF)',
    home: 58,
    visitor: 58,
    period: 3
  }, {
    event: 417,
    clock: '00:17.7',
    description: '[LVA] Plum Substitution replaced by Colson',
    home: 58,
    visitor: 58,
    period: 3
  }, {
    event: 419,
    clock: '00:03.7',
    description: '[MIN] Sims Turnover : Out of Bounds - Bad Pass Turnover (3 TO)',
    home: 58,
    visitor: 58,
    period: 3
  }, {
    event: 420,
    clock: '00:03.7',
    description: '[LVA] Cambage Substitution replaced by Plum',
    home: 58,
    visitor: 58,
    period: 3
  }, {
    event: 422,
    clock: '00:03.7',
    description: '[MIN] Coates Substitution replaced by Christmas-Kelly',
    home: 58,
    visitor: 58,
    period: 3
  }, {
    event: 424,
    clock: '00:00.0',
    description: 'End Period',
    home: 58,
    visitor: 58,
    period: 3
  }, {
    event: 431,
    clock: '10:00',
    description: 'Start Period',
    home: 58,
    visitor: 58,
    period: 4
  }, {
    event: 432,
    clock: '09:43',
    description: '[MIN] Brown Foul: Offensive Charge (1 PF)',
    home: 58,
    visitor: 58,
    period: 4
  }, {
    event: 434,
    clock: '09:43',
    description: '[MIN] Brown Turnover : Offensive Foul Turnover (1 TO)',
    home: 58,
    visitor: 58,
    period: 4
  }, {
    event: 435,
    clock: '09:30',
    description: '[LVA] Rodgers 3pt Shot: Missed',
    home: 58,
    visitor: 58,
    period: 4
  }, {
    event: 436,
    clock: '09:26',
    description: '[MIN] Robinson Rebound (Off:0 Def:3)',
    home: 58,
    visitor: 58,
    period: 4
  }, {
    event: 437,
    clock: '09:09',
    description: '[MIN 60-58] Dantas Step Back Jump shot: Made (17 PTS)',
    home: 60,
    visitor: 58,
    period: 4
  }, {
    event: 438,
    clock: '08:57',
    description: '[MIN] Robinson Foul: Personal (2 PF)',
    home: 60,
    visitor: 58,
    period: 4
  }, {
    event: 440,
    clock: '08:48',
    description: '[LVA 60-60] Young Layup Shot: Made (2 PTS) Assist: Hamby (3 AST)',
    home: 60,
    visitor: 60,
    period: 4
  }, {
    event: 442,
    clock: '08:30',
    description: '[LVA] Cambage Foul: Personal (3 PF)',
    home: 60,
    visitor: 60,
    period: 4
  }, {
    event: 444,
    clock: '08:21',
    description: '[MIN 62-60] Brown Step Back Jump shot: Made (7 PTS) Assist: Robinson (3 AST)',
    home: 62,
    visitor: 60,
    period: 4
  }, {
    event: 445,
    clock: '08:04',
    description: '[LVA] Plum 3pt Shot: Missed',
    home: 62,
    visitor: 60,
    period: 4
  }, {
    event: 446,
    clock: '08:00',
    description: '[MIN] Brown Rebound (Off:1 Def:2)',
    home: 62,
    visitor: 60,
    period: 4
  }, {
    event: 447,
    clock: '07:51',
    description: '[LVA] Rodgers Foul: Personal (1 PF)',
    home: 62,
    visitor: 60,
    period: 4
  }, {
    event: 449,
    clock: '07:51',
    description: '[LVA] Rodgers Substitution replaced by McBride',
    home: 62,
    visitor: 60,
    period: 4
  }, {
    event: 451,
    clock: '07:39',
    description: '[MIN] Christmas-Kelly Turnover : Lost Ball (1 TO) Steal:Plum (2 ST)',
    home: 62,
    visitor: 60,
    period: 4
  }, {
    event: 453,
    clock: '07:36',
    description: '[LVA 62-62] Plum Running Layup Shot: Made (18 PTS)',
    home: 62,
    visitor: 62,
    period: 4
  }, {
    event: 455,
    clock: '07:08',
    description: '[MIN 64-62] Robinson Jump Shot: Made (10 PTS) Assist: Fowles (1 AST)',
    home: 64,
    visitor: 62,
    period: 4
  }, {
    event: 457,
    clock: '06:56',
    description: '[MIN] Dantas Foul: Personal (4 PF)',
    home: 64,
    visitor: 62,
    period: 4
  }, {
    event: 459,
    clock: '06:56',
    description: '[MIN] Christmas-Kelly Substitution replaced by Collier',
    home: 64,
    visitor: 62,
    period: 4
  }, {
    event: 461,
    clock: '06:56',
    description: '[LVA] Hamby Substitution replaced by Wilson',
    home: 64,
    visitor: 62,
    period: 4
  }, {
    event: 463,
    clock: '06:48',
    description: '[LVA] Cambage Jump Shot: Missed',
    home: 64,
    visitor: 62,
    period: 4
  }, {
    event: 464,
    clock: '06:44',
    description: '[MIN] Fowles Rebound (Off:1 Def:7)',
    home: 64,
    visitor: 62,
    period: 4
  }, {
    event: 465,
    clock: '06:38',
    description: '[MIN 66-62] Robinson Pullup Jump shot: Made (12 PTS)',
    home: 66,
    visitor: 62,
    period: 4
  }, {
    event: 466,
    clock: '06:36',
    description: '[LVA] Team Timeout : Regular',
    home: 66,
    visitor: 62,
    period: 4
  }, {
    event: 467,
    clock: '06:19',
    description: '[LVA] McBride Jump Shot: Missed',
    home: 66,
    visitor: 62,
    period: 4
  }, {
    event: 468,
    clock: '06:16',
    description: '[MIN] Brown Rebound (Off:1 Def:3)',
    home: 66,
    visitor: 62,
    period: 4
  }, {
    event: 469,
    clock: '05:58',
    description: '[MIN 68-62] Fowles Layup Shot: Made (8 PTS) Assist: Collier (3 AST)',
    home: 68,
    visitor: 62,
    period: 4
  }, {
    event: 471,
    clock: '05:40',
    description: '[LVA 64-68] Cambage Layup Shot: Made (8 PTS) Assist: Wilson (2 AST)',
    home: 68,
    visitor: 64,
    period: 4
  }, {
    event: 473,
    clock: '05:27',
    description: '[MIN] Brown Turnover : Lost Ball (2 TO) Steal:McBride (1 ST)',
    home: 68,
    visitor: 64,
    period: 4
  }, {
    event: 475,
    clock: '05:24',
    description: '[LVA] Plum Running Layup Shot: Missed',
    home: 68,
    visitor: 64,
    period: 4
  }, {
    event: 476,
    clock: '05:23',
    description: '[MIN] Team Rebound',
    home: 68,
    visitor: 64,
    period: 4
  }, {
    event: 477,
    clock: '05:23',
    description: 'Stoppage: Out-of-Bounds',
    home: 68,
    visitor: 64,
    period: 4
  }, {
    event: 478,
    clock: '05:09',
    description: '[MIN 70-64] Collier Layup Shot: Made (8 PTS) Assist: Dantas (6 AST)',
    home: 70,
    visitor: 64,
    period: 4
  }, {
    event: 480,
    clock: '04:52',
    description: '[LVA] Wilson Turnover : Lost Ball (3 TO) Steal:Dantas (1 ST)',
    home: 70,
    visitor: 64,
    period: 4
  }, {
    event: 482,
    clock: '04:47',
    description: '[MIN 72-64] Dantas Layup Shot: Made (19 PTS) Assist: Robinson (4 AST)',
    home: 72,
    visitor: 64,
    period: 4
  }, {
    event: 484,
    clock: '04:38',
    description: 'Stoppage: Out-of-Bounds',
    home: 72,
    visitor: 64,
    period: 4
  }, {
    event: 485,
    clock: '04:38',
    description: '[LVA] Young Substitution replaced by Hamby',
    home: 72,
    visitor: 64,
    period: 4
  }, {
    event: 487,
    clock: '04:24',
    description: '[LVA 66-72] Cambage Layup Shot: Made (10 PTS) Assist: Wilson (3 AST)',
    home: 72,
    visitor: 66,
    period: 4
  }, {
    event: 489,
    clock: '04:02',
    description: '[MIN] Dantas Driving Layup Shot: Missed',
    home: 72,
    visitor: 66,
    period: 4
  }, {
    event: 490,
    clock: '04:00',
    description: '[LVA] Cambage Rebound (Off:0 Def:8)',
    home: 72,
    visitor: 66,
    period: 4
  }, {
    event: 491,
    clock: '03:56',
    description: '[LVA] McBride 3pt Shot: Missed',
    home: 72,
    visitor: 66,
    period: 4
  }, {
    event: 492,
    clock: '03:52',
    description: '[MIN] Collier Rebound (Off:0 Def:5)',
    home: 72,
    visitor: 66,
    period: 4
  }, {
    event: 493,
    clock: '03:28',
    description: '[MIN] Fowles Layup Shot: Missed',
    home: 72,
    visitor: 66,
    period: 4
  }, {
    event: 494,
    clock: '03:25',
    description: '[LVA] Wilson Rebound (Off:3 Def:5)',
    home: 72,
    visitor: 66,
    period: 4
  }, {
    event: 495,
    clock: '03:22',
    description: '[MIN] Collier Foul: Personal (4 PF)',
    home: 72,
    visitor: 66,
    period: 4
  }, {
    event: 497,
    clock: '03:22',
    description: '[MIN] Brown Substitution replaced by Sims',
    home: 72,
    visitor: 66,
    period: 4
  }, {
    event: 500,
    clock: '03:15',
    description: '[LVA 69-72] McBride 3pt Shot: Made (18 PTS) Assist: Plum (2 AST)',
    home: 72,
    visitor: 69,
    period: 4
  }, {
    event: 502,
    clock: '02:52',
    description: '[MIN] Robinson 3pt Shot: Missed',
    home: 72,
    visitor: 69,
    period: 4
  }, {
    event: 503,
    clock: '02:49',
    description: '[LVA] Cambage Rebound (Off:0 Def:9)',
    home: 72,
    visitor: 69,
    period: 4
  }, {
    event: 504,
    clock: '02:36',
    description: '[LVA 72-72] Plum 3pt Shot: Made (21 PTS) Assist: Hamby (4 AST)',
    home: 72,
    visitor: 72,
    period: 4
  }, {
    event: 506,
    clock: '02:35',
    description: '[MIN] Team Timeout : Regular',
    home: 72,
    visitor: 72,
    period: 4
  }, {
    event: 507,
    clock: '02:11',
    description: '[MIN] Team Turnover : Shot Clock Turnover',
    home: 72,
    visitor: 72,
    period: 4
  }, {
    event: 510,
    clock: '02:01',
    description: '[MIN] Dantas Foul: Shooting (5 PF) (2 FTA)',
    home: 72,
    visitor: 72,
    period: 4
  }, {
    event: 512,
    clock: '02:01',
    description: '[LVA 73-72] Cambage Free Throw 1 of 2 (11 PTS)',
    home: 72,
    visitor: 73,
    period: 4
  }, {
    event: 513,
    clock: '02:01',
    description: '[MIN] Robinson Substitution replaced by Brown',
    home: 72,
    visitor: 73,
    period: 4
  }, {
    event: 515,
    clock: '02:01',
    description: '[LVA 74-72] Cambage Free Throw 2 of 2 (12 PTS)',
    home: 72,
    visitor: 74,
    period: 4
  }, {
    event: 516,
    clock: '01:47',
    description: '[MIN] Dantas 3pt Shot: Missed',
    home: 72,
    visitor: 74,
    period: 4
  }, {
    event: 517,
    clock: '01:43',
    description: '[MIN] Fowles Rebound (Off:2 Def:7)',
    home: 72,
    visitor: 74,
    period: 4
  }, {
    event: 518,
    clock: '01:36',
    description: '[MIN] Brown 3pt Shot: Missed',
    home: 72,
    visitor: 74,
    period: 4
  }, {
    event: 519,
    clock: '01:32',
    description: '[LVA] Hamby Rebound (Off:2 Def:5)',
    home: 72,
    visitor: 74,
    period: 4
  }, {
    event: 520,
    clock: '01:09',
    description: '[LVA] Hamby Turnaround Jump Shot: Missed',
    home: 72,
    visitor: 74,
    period: 4
  }, {
    event: 521,
    clock: '01:06',
    description: '[MIN] Dantas Rebound (Off:1 Def:2)',
    home: 72,
    visitor: 74,
    period: 4
  }, {
    event: 522,
    clock: '00:52.7',
    description: '[MIN] Collier Turnover : Step Out of Bounds Turnover (4 TO)',
    home: 72,
    visitor: 74,
    period: 4
  }, {
    event: 523,
    clock: '00:52.7',
    description: 'Instant Replay - Support Ruling',
    home: 72,
    visitor: 74,
    period: 4
  }, {
    event: 524,
    clock: '00:44.7',
    description: '[MIN] Brown Foul: Personal (2 PF) (2 FTA)',
    home: 72,
    visitor: 74,
    period: 4
  }, {
    event: 526,
    clock: '00:44.7',
    description: '[LVA 75-72] Cambage Free Throw 1 of 2 (13 PTS)',
    home: 72,
    visitor: 75,
    period: 4
  }, {
    event: 527,
    clock: '00:44.7',
    description: '[LVA 76-72] Cambage Free Throw 2 of 2 (14 PTS)',
    home: 72,
    visitor: 76,
    period: 4
  }, {
    event: 528,
    clock: '00:44.7',
    description: '[MIN] Team Timeout : Short',
    home: 72,
    visitor: 76,
    period: 4
  }, {
    event: 529,
    clock: '00:42.8',
    description: '[MIN] Sims Floating Jump shot: Missed',
    home: 72,
    visitor: 76,
    period: 4
  }, {
    event: 530,
    clock: '00:39.7',
    description: '[LVA] McBride Rebound (Off:0 Def:5)',
    home: 72,
    visitor: 76,
    period: 4
  }, {
    event: 531,
    clock: '00:25.6',
    description: '[MIN] Collier Foul: Personal Take (5 PF) (2 FTA)',
    home: 72,
    visitor: 76,
    period: 4
  }, {
    event: 533,
    clock: '00:25.6',
    description: '[LVA 77-72] McBride Free Throw 1 of 2 (19 PTS)',
    home: 72,
    visitor: 77,
    period: 4
  }, {
    event: 534,
    clock: '00:25.6',
    description: '[LVA 78-72] McBride Free Throw 2 of 2 (20 PTS)',
    home: 72,
    visitor: 78,
    period: 4
  }, {
    event: 535,
    clock: '00:25.6',
    description: '[MIN] Team Timeout : Short',
    home: 72,
    visitor: 78,
    period: 4
  }, {
    event: 536,
    clock: '00:25.6',
    description: '[MIN] Collier Substitution replaced by Robinson',
    home: 72,
    visitor: 78,
    period: 4
  }, {
    event: 538,
    clock: '00:18.5',
    description: '[MIN 74-78] Dantas Driving Layup Shot: Made (21 PTS)',
    home: 74,
    visitor: 78,
    period: 4
  }, {
    event: 539,
    clock: '00:18.5',
    description: '[LVA] Wilson Foul: Shooting (3 PF) (1 FTA)',
    home: 74,
    visitor: 78,
    period: 4
  }, {
    event: 541,
    clock: '00:18.5',
    description: '[MIN 75-78] Dantas Free Throw 1 of 1 (22 PTS)',
    home: 75,
    visitor: 78,
    period: 4
  }, {
    event: 542,
    clock: '00:12.6',
    description: '[MIN] Sims Foul: Personal Take (1 PF) (2 FTA)',
    home: 75,
    visitor: 78,
    period: 4
  }, {
    event: 544,
    clock: '00:12.6',
    description: '[LVA 79-75] McBride Free Throw 1 of 2 (21 PTS)',
    home: 75,
    visitor: 79,
    period: 4
  }, {
    event: 545,
    clock: '00:12.6',
    description: '[LVA 80-75] McBride Free Throw 2 of 2 (22 PTS)',
    home: 75,
    visitor: 80,
    period: 4
  }, {
    event: 546,
    clock: '00:03.1',
    description: '[MIN] Sims 3pt Shot: Missed',
    home: 75,
    visitor: 80,
    period: 4
  }, {
    event: 547,
    clock: '00:03.1',
    description: '[LVA] Plum Rebound (Off:1 Def:3)',
    home: 75,
    visitor: 80,
    period: 4
  }, {
    event: 548,
    clock: '00:00.0',
    description: 'End Period',
    home: 75,
    visitor: 80,
    period: 4
  }, {
    event: 549,
    clock: '00:00.0',
    description: 'Game End',
    home: 75,
    visitor: 80,
    period: 4
  }]
}

export const boxscore: BoxScore = {
  status: Status.postgame,
  clock: '00:00.0',
  quarter: '4',
  teams: {
    home: {
      id: '1611661324',
      abbr: 'MIN',
      nickname: 'Lynx',
      location: 'Minnesota',
      score: 75,
      leaders: {
        points: {
          count: 1,
          value: 22,
          players: ['203024']
        },
        assists: {
          count: 1,
          value: 6,
          players: ['203024']
        },
        rebounds: {
          count: 1,
          value: 9,
          players: ['201480']
        }
      },
      players: [{
        id: '1629483',
        first: 'Napheesa',
        last: 'Collier',
        position: 'SF',
        minutes: 31,
        seconds: 34,
        points: 8,
        fgm: 4,
        fga: 7,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 1,
        offensiveRebounds: 0,
        defensiveRebounds: 5,
        rebounds: 5,
        assists: 3,
        fouls: 5,
        steals: 1,
        turnovers: 4,
        blocks: 1,
        plusMinus: -12
      }, {
        id: '203024',
        first: 'Damiris',
        last: 'Dantas',
        position: 'PF',
        minutes: 33,
        seconds: 58,
        points: 22,
        fgm: 8,
        fga: 15,
        ftm: 1,
        fta: 1,
        tpm: 5,
        tpa: 10,
        offensiveRebounds: 1,
        defensiveRebounds: 2,
        rebounds: 3,
        assists: 6,
        fouls: 5,
        steals: 1,
        turnovers: 0,
        blocks: 1,
        plusMinus: 7
      }, {
        id: '201480',
        first: 'Sylvia',
        last: 'Fowles',
        position: 'C',
        minutes: 29,
        seconds: 33,
        points: 8,
        fgm: 4,
        fga: 9,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 2,
        defensiveRebounds: 7,
        rebounds: 9,
        assists: 1,
        fouls: 3,
        steals: 1,
        turnovers: 1,
        blocks: 2,
        plusMinus: -2
      }, {
        id: '203824',
        first: 'Odyssey',
        last: 'Sims',
        position: 'SG',
        minutes: 28,
        seconds: 35,
        points: 14,
        fgm: 3,
        fga: 11,
        ftm: 7,
        fta: 8,
        tpm: 1,
        tpa: 4,
        offensiveRebounds: 0,
        defensiveRebounds: 2,
        rebounds: 2,
        assists: 5,
        fouls: 1,
        steals: 0,
        turnovers: 3,
        blocks: 0,
        plusMinus: -6
      }, {
        id: '202658',
        first: 'Danielle',
        last: 'Robinson',
        position: 'PG',
        minutes: 29,
        seconds: 26,
        points: 12,
        fgm: 5,
        fga: 12,
        ftm: 1,
        fta: 1,
        tpm: 1,
        tpa: 5,
        offensiveRebounds: 0,
        defensiveRebounds: 3,
        rebounds: 3,
        assists: 4,
        fouls: 2,
        steals: 0,
        turnovers: 2,
        blocks: 0,
        plusMinus: 4
      }, {
        id: '1628268',
        first: 'Alaina',
        last: 'Coates',
        position: '',
        minutes: 12,
        seconds: 2,
        points: 4,
        fgm: 2,
        fga: 4,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 1,
        defensiveRebounds: 2,
        rebounds: 3,
        assists: 0,
        fouls: 2,
        steals: 1,
        turnovers: 1,
        blocks: 1,
        plusMinus: -5
      }, {
        id: '1628882',
        first: 'Lexie',
        last: 'Brown',
        position: '',
        minutes: 20,
        seconds: 53,
        points: 7,
        fgm: 3,
        fga: 6,
        ftm: 0,
        fta: 0,
        tpm: 1,
        tpa: 4,
        offensiveRebounds: 1,
        defensiveRebounds: 3,
        rebounds: 4,
        assists: 0,
        fouls: 2,
        steals: 1,
        turnovers: 2,
        blocks: 0,
        plusMinus: -2
      }, {
        id: '202640',
        first: 'Karima',
        last: 'Christmas-Kelly',
        position: '',
        minutes: 11,
        seconds: 58,
        points: 0,
        fgm: 0,
        fga: 2,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 1,
        offensiveRebounds: 0,
        defensiveRebounds: 2,
        rebounds: 2,
        assists: 2,
        fouls: 2,
        steals: 1,
        turnovers: 1,
        blocks: 0,
        plusMinus: -2
      }, {
        id: '203855',
        first: 'Stephanie',
        last: 'Talbot',
        position: '',
        minutes: 1,
        seconds: 58,
        points: 0,
        fgm: 0,
        fga: 2,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 1,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 1,
        steals: 0,
        turnovers: 0,
        blocks: 0,
        plusMinus: -7
      }, {
        id: '200671',
        first: 'Seimone',
        last: 'Augustus',
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
        id: '1629491',
        first: 'Jessica',
        last: 'Shepard',
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
        id: '1628261',
        first: 'Shao',
        last: 'Ting',
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
        points: 75,
        fgm: 29,
        fga: 68,
        ftm: 9,
        fta: 10,
        tpm: 8,
        tpa: 26,
        offensiveRebounds: 5,
        defensiveRebounds: 26,
        rebounds: 31,
        assists: 21,
        steals: 6,
        turnovers: 14,
        blocks: 5,
        technicalFouls: 0
      }
    },
    visitor: {
      id: '1611661319',
      abbr: 'LVA',
      nickname: 'Aces',
      location: 'Las Vegas',
      score: 80,
      leaders: {
        points: {
          count: 1,
          value: 22,
          players: ['203825']
        },
        assists: {
          count: 1,
          value: 4,
          players: ['204324']
        },
        rebounds: {
          count: 1,
          value: 9,
          players: ['202633']
        }
      },
      players: [{
        id: '203825',
        first: 'Kayla',
        last: 'McBride',
        position: 'SF',
        minutes: 31,
        seconds: 42,
        points: 22,
        fgm: 6,
        fga: 12,
        ftm: 8,
        fta: 9,
        tpm: 2,
        tpa: 5,
        offensiveRebounds: 0,
        defensiveRebounds: 5,
        rebounds: 5,
        assists: 1,
        fouls: 1,
        steals: 1,
        turnovers: 2,
        blocks: 0,
        plusMinus: 9
      }, {
        id: '1628932',
        first: "A'ja",
        last: 'Wilson',
        position: 'PF',
        minutes: 31,
        seconds: 40,
        points: 13,
        fgm: 3,
        fga: 5,
        ftm: 7,
        fta: 8,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 3,
        defensiveRebounds: 5,
        rebounds: 8,
        assists: 3,
        fouls: 3,
        steals: 0,
        turnovers: 3,
        blocks: 3,
        plusMinus: 6
      }, {
        id: '202633',
        first: 'Liz',
        last: 'Cambage',
        position: 'C',
        minutes: 32,
        seconds: 31,
        points: 14,
        fgm: 4,
        fga: 11,
        ftm: 6,
        fta: 6,
        tpm: 0,
        tpa: 1,
        offensiveRebounds: 0,
        defensiveRebounds: 9,
        rebounds: 9,
        assists: 0,
        fouls: 3,
        steals: 0,
        turnovers: 2,
        blocks: 1,
        plusMinus: -6
      }, {
        id: '1629498',
        first: 'Jackie',
        last: 'Young',
        position: 'SG',
        minutes: 13,
        seconds: 5,
        points: 0,
        fgm: 0,
        fga: 4,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 2,
        rebounds: 2,
        assists: 1,
        fouls: 1,
        steals: 2,
        turnovers: 1,
        blocks: 0,
        plusMinus: -6
      }, {
        id: '1628276',
        first: 'Kelsey',
        last: 'Plum',
        position: 'PG',
        minutes: 37,
        seconds: 20,
        points: 21,
        fgm: 8,
        fga: 17,
        ftm: 0,
        fta: 0,
        tpm: 5,
        tpa: 8,
        offensiveRebounds: 1,
        defensiveRebounds: 3,
        rebounds: 4,
        assists: 2,
        fouls: 3,
        steals: 2,
        turnovers: 3,
        blocks: 1,
        plusMinus: 9
      }, {
        id: '204324',
        first: 'Dearica',
        last: 'Hamby',
        position: '',
        minutes: 19,
        seconds: 52,
        points: 3,
        fgm: 1,
        fga: 4,
        ftm: 1,
        fta: 2,
        tpm: 0,
        tpa: 2,
        offensiveRebounds: 2,
        defensiveRebounds: 5,
        rebounds: 7,
        assists: 4,
        fouls: 1,
        steals: 1,
        turnovers: 0,
        blocks: 1,
        plusMinus: 20
      }, {
        id: '202641',
        first: 'Sydney',
        last: 'Colson',
        position: '',
        minutes: 4,
        seconds: 31,
        points: 2,
        fgm: 0,
        fga: 1,
        ftm: 2,
        fta: 2,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 0,
        rebounds: 0,
        assists: 0,
        fouls: 0,
        steals: 0,
        turnovers: 2,
        blocks: 0,
        plusMinus: 1
      }, {
        id: '201477',
        first: 'Tamera',
        last: 'Young',
        position: '',
        minutes: 15,
        seconds: 21,
        points: 2,
        fgm: 1,
        fga: 2,
        ftm: 0,
        fta: 0,
        tpm: 0,
        tpa: 0,
        offensiveRebounds: 0,
        defensiveRebounds: 2,
        rebounds: 2,
        assists: 1,
        fouls: 0,
        steals: 0,
        turnovers: 2,
        blocks: 0,
        plusMinus: -11
      }, {
        id: '1628917',
        first: 'JiSu',
        last: 'Park',
        position: '',
        minutes: 0,
        seconds: 31,
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
        plusMinus: 3
      }, {
        id: '203411',
        first: 'Sugar',
        last: 'Rodgers',
        position: '',
        minutes: 13,
        seconds: 25,
        points: 3,
        fgm: 1,
        fga: 3,
        ftm: 0,
        fta: 0,
        tpm: 1,
        tpa: 2,
        offensiveRebounds: 0,
        defensiveRebounds: 1,
        rebounds: 1,
        assists: 3,
        fouls: 1,
        steals: 0,
        turnovers: 1,
        blocks: 0,
        plusMinus: 0
      }, {
        id: '202670',
        first: 'Carolyn',
        last: 'Swords',
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
        points: 80,
        fgm: 24,
        fga: 59,
        ftm: 24,
        fta: 27,
        tpm: 8,
        tpa: 18,
        offensiveRebounds: 6,
        defensiveRebounds: 32,
        rebounds: 38,
        assists: 15,
        steals: 6,
        turnovers: 16,
        blocks: 6,
        technicalFouls: 0
      }
    }
  }
}
