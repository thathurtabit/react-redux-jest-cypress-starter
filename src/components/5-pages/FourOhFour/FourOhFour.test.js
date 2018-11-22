import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import FourOhFour from './FourOhFour';

describe('FourOhFour', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<FourOhFour />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
