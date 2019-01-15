import { REQUEST_DATA_ERROR } from '../constants/stateConstants';

export const requestDataError = error => ({
  type: REQUEST_DATA_ERROR,
  payload: error,
});
