import * as actions from './requestDataError';
import { REQUEST_DATA_ERROR } from '../constants/stateConstants';

describe('requestDataError Action', () => {
  it('should create an action and deliver the type', () => {
    const payload = new Error();
    const expectedAction = {
      type: REQUEST_DATA_ERROR,
      payload,
    };
    expect(actions.requestDataError(payload)).toEqual(expectedAction);
  });
});
