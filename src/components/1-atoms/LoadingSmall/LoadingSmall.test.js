import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import LoadingSmall from './LoadingSmall';

describe('LoadingSmall', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<LoadingSmall />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
