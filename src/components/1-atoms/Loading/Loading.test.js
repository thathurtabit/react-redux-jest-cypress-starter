import React from "react";
import { shallowToJson } from "enzyme-to-json";
import "jest-styled-components";
import { shallowWithTheme } from "../../../utils/test_config/testHelpers";

import Loading from "./Loading";

describe("Loading", () => {
  it("should render correctly", () => {
    const element = shallowWithTheme(<Loading loading />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });

  it("should show correct props on loading", () => {
    const element = shallowWithTheme(<Loading loading />);
    const elementProps = element.props();
    expect(elementProps.loading).toBe(true);
  });

  it("should show correct props when not loading", () => {
    const element = shallowWithTheme(<Loading loading={false} />);
    const elementProps = element.props();
    expect(elementProps.loading).toBe(false);
  });
});
