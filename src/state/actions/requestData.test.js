import * as actions from './requestData';
import { REQUEST_DATA } from '../constants/stateConstants';

describe('requestData Action', () => {
  it('should create an action and deliver the type', () => {
    const expectedAction = {
      type: REQUEST_DATA,
    };
    expect(actions.requestData()).toEqual(expectedAction);
  });
});
