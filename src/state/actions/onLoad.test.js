import * as actions from "./onLoad";
import { ON_LOAD } from "../constants/stateConstants";

describe("onLoad action", () => {
  it("should create an action and deliver the payload", () => {
    const payload = false;
    const expectedAction = {
      type: ON_LOAD,
      payload
    };
    expect(actions.onLoad(payload)).toEqual(expectedAction);
  });
});
