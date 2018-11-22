import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import Features from './Features';

describe('Features', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Features />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
