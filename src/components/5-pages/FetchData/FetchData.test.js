import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import FetchData from './FetchData';

const Title = 'Test Subtitle';

describe('FetchData', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <FetchData response={[Title, Title, Title]} />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
