import { SET_READY } from '../constants/stateConstants';

export const setReady = bool => ({
  type: SET_READY,
  payload: bool,
});
