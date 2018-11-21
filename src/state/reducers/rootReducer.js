import * as types from "../constants/stateConstants";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ON_LOAD:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
