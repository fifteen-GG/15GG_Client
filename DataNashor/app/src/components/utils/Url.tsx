export const urlGameData = (fileName: string) => {
  return process.env.REACT_APP_GG_API_ROOT + `${fileName.replace('.rofl', '')}`;
};

export const urlChampion = (champion: string) => {
  return process.env.REACT_APP_OPGG_API_ROOT + `/champion/${champion}.png`;
};
