import reducer from "./rootReducer";
import * as types from "../constants/stateConstants";
import initState from "../store/initState";

describe("rootReducer", () => {
  it("should return the initial state", () => {
    expect(reducer(initState, {})).toEqual(initState);
  });

  it("should handle ON_LOAD", () => {
    expect(
      reducer(initState, {
        type: types.ON_LOAD,
        payload: false
      })
    ).toEqual({
      ...initState,
      loading: false
    });
  });
});
