import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import Header from './Header';

describe('Header', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Header />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
