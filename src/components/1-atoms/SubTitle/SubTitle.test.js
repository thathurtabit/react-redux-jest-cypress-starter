import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import {
  shallowWithTheme,
  mountWithTheme,
} from '../../../utils/test_config/testHelpers';

import SubTitle from './SubTitle';

const Title = 'Test Subtitle';

describe('SubTitle', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<SubTitle title={Title} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });

  it('should return the correct text', () => {
    const element = mountWithTheme(<SubTitle title={Title} />);
    expect(element.text()).toBe(Title);
  });
});
