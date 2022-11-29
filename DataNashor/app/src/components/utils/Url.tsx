const GG_API_ROOT = 'http://43.201.8.37:8000/api/v1/riot/match/preview/';

const OPGG_API_ROOT = 'https://opgg-static.akamaized.net/images/lol';

export const urlGameData = (fileName: string) => {
  return GG_API_ROOT + `${fileName.replace('.rofl', '')}`;
};

export const urlChampion = (champion: string) => {
  return OPGG_API_ROOT + `/champion/${champion}.png`;
};
