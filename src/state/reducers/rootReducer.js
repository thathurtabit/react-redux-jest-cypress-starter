import * as types from '../constants/stateConstants';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_READY:
      return { ...state, isReady: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
