import { Status, StatusInt } from './types'

export interface LeagueScoreboardGameTeam {
  tid: number;
  re: string;
  ta: string;
  tn: string;
  tc: string;
  s: string;
}

export interface LeagueScoreboardGameBroadcaster {
  seq: number;
  disp: string;
  scope: 'natl' | 'home' | 'away';
  type: 'tv' | 'radio';
  lan: string;
}

export interface LeagueScoreboardGame {
  gid: string;
  gcode: string;
  seri: string;
  is: number;
  gdte: string;
  htm: string;
  vtm: string;
  etm: string;
  an: string;
  ac: string;
  as: string;
  st: Status;
  stt: string;
  bd: {
    b: LeagueScoreboardGameBroadcaster[];
  };
  v: LeagueScoreboardGameTeam;
  h: LeagueScoreboardGameTeam;
  gdtutc: string;
  utctm: string;
  ppdst: string;
}

export interface LeagueScoreboard {
  gscd: {
    tid: number;
    g: LeagueScoreboardGame[];
  };
}

export interface LeaguePlay {
  evt: number;
  cl: string;
  de: string;
  locX: number;
  locY: number;
  opt1: number;
  opt2: number;
  mtype: number;
  etype: number;
  opid: string;
  tid: number;
  pid: number;
  hs: number;
  vs: number;
  epid: string;
  oftid: number;
  ord: number;
}

export interface LeaguePlayByPlayQuarter {
  p: number;
  pla: LeaguePlay[];
}

export interface LeaguePlayByPlay {
  g: {
    mid: number;
    gid: string;
    gcode: string;
    next: string;
    pd: LeaguePlayByPlayQuarter[];
  };
}

export interface LeagueOfficial {
  fn: string;
  ln: string;
  number: string;
}

export interface LeagueBoxScoreStatsBase {
  fga: number;
  fgm: number;
  tpa: number;
  tpm: number;
  fta: number;
  ftm: number;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  pf: number;
  tov: number;
  fbpts: number;
  fbptsa: number;
  fbptsm: number;
  pip: number;
  pipa: number;
  pipm: number;
  tf: number;
}

export interface LeagueBoxScoreTeamStats extends LeagueBoxScoreStatsBase {
  ble: number;
  bpts: number;
  scp: number;
  tmreb: number;
  tmtov: number;
  potov: number;
}

export interface LeagueBoxScoreTeamPlayer extends LeagueBoxScoreStatsBase {
  fn: string;
  ln: string;
  num: string;
  pos: string;
  min: number;
  sec: number;
  totsec: number;
  pts: number;
  court: 0 | 1;
  pid: number;
  pm: number;
  blka: number;
  status: string;
  memo: string;
}

export interface LeagueBoxScoreTeam {
  s: number;
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  ot1: number;
  ot2: number;
  ot3: number;
  ot4: number;
  ot5: number;
  ot6: number;
  ot7: number;
  ot8: number;
  ot9: number;
  ot10: number;
  ta: string;
  tn: string;
  tc: string;
  tid: number;
  ftout: number;
  stout: number;
  tstsg: LeagueBoxScoreTeamStats;
  pstsg: LeagueBoxScoreTeamPlayer[];
}

export interface LeagueBoxScore {
  g: {
    mid: number;
    gid: string;
    gdte: string;
    htm: string;
    vtm: string;
    etm: string;
    gdtutc: string;
    utctm: string;
    ac: string;
    as: string;
    gcode: string;
    next: string;
    ar: number;
    p: number;
    st: StatusInt;
    stt: string;
    cl: string;
    lpla: LeaguePlay;
    an: string;
    at: number;
    gsts: {
      lc: number;
      tt: number;
    };
    dur: string;
    offs: {
      off: LeagueOfficial[];
    };
    hls: LeagueBoxScoreTeam;
    vls: LeagueBoxScoreTeam;
  };
}
