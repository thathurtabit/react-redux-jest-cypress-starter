import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import Home from './Home';

describe('Home', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Home />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
