import { dataObject, KillsInfo } from "../types";
import { findStartAndEndRoundsIndex } from "./data";

export const getKillsInfo = (parsedData: dataObject[]) => {
  const killsInfo: KillsInfo[] = [];

  const roundsIndex = findStartAndEndRoundsIndex(parsedData);
  roundsIndex.map(({ round, index: { start, end } }) => {
    const killsPerRound: { [key: string]: number } = {};
    let totalKillsPerRound = 0
    for (let i = start; i < end; i++) {
      const { info } = parsedData[i];
      const foundAttack = info.toLowerCase().includes('killed "');

      if (foundAttack) {
        totalKillsPerRound++;
        const playerName = info.split('"')[1].split("<")[0].trim();
        if (killsPerRound[playerName]) {
          killsPerRound[playerName]++;
        } else {
          killsPerRound[playerName] = 1;
        }
      }
    }
    killsInfo.push({ round, killsPerRound, totalKillsPerRound });
  });

  return killsInfo;
};

export const getTotalKillsOfMatch = (parsedData: dataObject[]) => {
  let totalKills = 0;

  let killCounter = 1;
  parsedData.map(({ info }) => {
    const foundAttack = info.toLowerCase().includes('killed "');

    if (foundAttack) {
      totalKills = killCounter++;
    }
  });

  return totalKills;
};
