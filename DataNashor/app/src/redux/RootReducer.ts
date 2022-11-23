const initialState = {
  replayName: '',
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_REPLAY_NAME':
      return {
        ...state,
        replayName: action.payload,
      };
  }
};

export default rootReducer;
