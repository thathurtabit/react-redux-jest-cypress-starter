import React from "react";
import { mount, shallow } from "enzyme";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

export function shallowWithTheme(component) {
  return shallow(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}

export function shallowWithStore(component, store) {
  const context = { store };
  return shallow(<ThemeProvider theme={theme}>{component}</ThemeProvider>, {
    context
  });
}

export function mountWithTheme(component) {
  return mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
}

export function mountWithStore(component, store) {
  const context = { store };
  return mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>, {
    context
  });
}
