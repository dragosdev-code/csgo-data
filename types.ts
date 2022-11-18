export type dataObject = {
  timestamp: string;
  info: string;
};

export type rounds = {
  round: number;
  lasted: number;
};

export type roundTime = {
  start: string;
  end: string;
};

export type infoMatch = {
  teams: string;
  dayOfMatch: string;
};

export type roundsInfo = {
  round: number;
  index: {
    start: number;
    end: number;
  };
};

export type KillsInfo = {
  round: number;
  killsPerRound: {
    [key: string]: number;
  };
  totalKillsPerRound: number;
};
