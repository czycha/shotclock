import { DateTime } from 'luxon'

import { Requirement } from './check'

export enum Status {
  pregame = '1',
  midgame = '2',
  postgame = '3'
}

export enum StatusInt {
  pregame = 1,
  midgame = 2,
  postgame = 3
}

export type Team = {
  id: string;
  abbr: string;
  nickname: string;
  location: string;
  score: number;
  record: string;
};

export type Broadcaster = {
  scope: 'local' | 'natl' | string;
  team: 'home' | 'visitor' | 'none';
  display: string;
  language: string;
};

export type Broadcasters = {
  tv: Array<Broadcaster>;
  radio: Array<Broadcaster>;
}

export type Scoreboard = {
  id: string;
  status: Status;
  date: string; // yyyyMMdd, EST
  time: string; // HHmm, EST
  dateTime: DateTime;
  teams: {
    home: Team;
    visitor: Team;
  };
  broadcasters: Broadcasters;
};

export type Play = {
  event: number;
  clock: string;
  description: string;
  home: number;
  visitor: number;
  period: number;
};

export type PlayByPlay = {
  plays: Array<Play>;
};

export type Leaders = {
  count: number;
  value: number;
  players: Array<string>; // id
};

export type Player = {
  id: string;
  first: string;
  last: string;
  position: string;
  minutes: number;
  seconds: number;
  points: number;
  fgm: number;
  fga: number;
  ftm: number;
  fta: number;
  tpm: number;
  tpa: number;
  offensiveRebounds: number;
  defensiveRebounds: number;
  rebounds: number;
  assists: number;
  fouls: number;
  steals: number;
  turnovers: number;
  blocks: number;
  plusMinus: number;
};

export type TeamBoxScore = Omit<Team, 'record'> & {
  leaders: {
    points?: Leaders;
    assists?: Leaders;
    rebounds?: Leaders;
  };
  players: Array<Player>;
  stats: {
    points: number;
    fgm: number;
    fga: number;
    ftm: number;
    fta: number;
    tpm: number;
    tpa: number;
    offensiveRebounds: number;
    defensiveRebounds: number;
    rebounds: number;
    assists: number;
    steals: number;
    turnovers: number;
    blocks: number;
    technicalFouls: number;
  };
};

export type BoxScore = {
  status: Status;
  clock: string;
  quarter: string;
  teams: {
    home: TeamBoxScore;
    visitor: TeamBoxScore;
  };
}

export type DataFromRequirement<T extends Requirement> = T extends 'playByPlay'
  ? PlayByPlay
  : T extends 'scoreboard'
    ? Scoreboard
    : T extends 'boxscore'
      ? BoxScore
      : never

export type RequirementFromData<T extends Scoreboard | BoxScore | PlayByPlay> = T extends Scoreboard
  ? 'scoreboard'
  : T extends PlayByPlay
    ? 'playByPlay'
    : T extends BoxScore
      ? 'boxscore'
      : never
