import React, { Fragment } from 'react';
import PageTitle from '../../1-atoms/PageTitle/PageTitle';
import { UL, LI, Row, Item, A } from './Features.styled';

const link = (title, url) => (
  <A href={url} title={`Learn about ${title}`} target="_blank" rel="noopener">
    {title}
  </A>
);

const Features = () => (
  <Fragment>
    <PageTitle title="Featuring" />
    <Row>
      <Item>
        <UL>
          <LI>{link('React', 'https://reactjs.org/')}</LI>
          <LI>{link('Redux', 'https://redux.js.org/')}</LI>
          <LI>
            {link(
              'React Router',
              'https://reacttraining.com/react-router/web/guides/quick-start'
            )}
          </LI>
          <LI>
            {link('StyledComponents', 'https://www.styled-components.com/')}
          </LI>
          <LI>
            {link(
              'React Transition Group',
              'https://reactcommunity.org/react-transition-group/'
            )}
          </LI>
          <LI>{link('Jest', 'https://jestjs.io/en/')}</LI>
          <LI>{link('Enzyme', 'https://airbnb.io/enzyme/')}</LI>
          <LI>{link('Cypress', 'https://www.cypress.io/')}</LI>
        </UL>
      </Item>
    </Row>
  </Fragment>
);

export default Features;
