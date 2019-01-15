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

  it('should handle REQUEST_DATA', () => {
    expect(
      reducer(initState, {
        type: types.REQUEST_DATA,
        payload: true,
      })
    ).toEqual({
      ...initState,
      data: {
        ...initState.data,
        fetching: true,
      },
    });
  });

  it('should handle REQUEST_DATA_ERROR', () => {
    expect(
      reducer(initState, {
        type: types.REQUEST_DATA_ERROR,
        payload: 'Error',
      })
    ).toEqual({
      ...initState,
      data: {
        ...initState.data,
        fetchError: 'Error',
        fetching: false,
      },
    });
  });

  it('should handle RECEIVE_EXAMPLE_DATA', () => {
    expect(
      reducer(initState, {
        type: types.RECEIVE_EXAMPLE_DATA,
        payload: [],
      })
    ).toEqual({
      ...initState,
      data: {
        ...initState.data,
        response: [],
        fetching: false,
      },
    });
  });
});
