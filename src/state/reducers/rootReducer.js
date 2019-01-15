import * as types from '../constants/stateConstants';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_READY:
      return { ...state, isReady: action.payload };
    case types.REQUEST_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          fetching: true,
        },
      };
    case types.REQUEST_DATA_ERROR:
      return {
        ...state,
        data: {
          ...state.data,
          fetchError: action.payload,
          fetching: false,
        },
      };
    case types.RECEIEVE_EXAMPLE_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          response: action.payload,
          fetching: false,
          itemCount: action.payload.length,
        },
      };
    default:
      return state;
  }
};

export default rootReducer;
