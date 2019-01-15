import reducer from './rootReducer';
import * as types from '../constants/stateConstants';
import initState from '../store/initState';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(initState, {})).toEqual(initState);
  });

  it('should handle IS_READY', () => {
    expect(
      reducer(initState, {
        type: types.IS_READY,
        payload: false,
      })
    ).toEqual({
      ...initState,
      isReady: false,
    });
  });
});
