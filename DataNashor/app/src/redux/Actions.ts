export const setReplayName = (data: string) => ({
  type: 'SET_REPLAY_NAME',
  payload: data,
});

export const setLiveStatus = (data: number) => ({
  type: 'SET_LIVE_STATUS',
  payload: data,
});

export const setWinRate = (data: number) => ({
  type: 'SET_WIN_RATE',
  payload: data,
});
