const initialState = {
  replayName: '',
  liveStatus: 0,
  winRate: 0,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_REPLAY_NAME':
      return {
        ...state,
        replayName: action.payload,
      };
    case 'SET_LIVE_STATUS':
      return {
        ...state,
        replayName: action.payload,
      };
    case 'SET_WIN_RATE':
      return {
        ...state,
        replayName: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
