import { ON_LOAD } from "../constants/stateConstants";

export const onLoad = bool => ({
  type: ON_LOAD,
  payload: bool
});
