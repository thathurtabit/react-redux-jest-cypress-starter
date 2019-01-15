import * as actions from './setReady';
import { SET_READY } from '../constants/stateConstants';

describe('setReady action', () => {
  it('should create an action and deliver the payload', () => {
    const payload = false;
    const expectedAction = {
      type: SET_READY,
      payload,
    };
    expect(actions.setReady(payload)).toEqual(expectedAction);
  });
});
