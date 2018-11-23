import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import WebFont from 'webfontloader';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router-dom';
import GATracker from '../../../utils/helpers/GATracker';
import theme from '../../../theme/theme';
import Routes from '../Routes/Routes';
import Header from '../../2-molecules/Header/Header';
import AppStyled from './App.styled';
import ScrollToTop from '../../../utils/helpers/ScrollToTop';

const history = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
  body {
    background: #040f13;
    color: #fff;
    margin: 0;
    min-height: 100vh;
    padding: 0;
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: #61dafb;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

WebFont.load({
  google: {
    families: ['Poppins'],
  },
});

const App = () => (
  <ConnectedRouter history={history}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <ScrollToTop>
          <AppStyled>
            <Header />
            <Route path="/" component={GATracker(Routes)} />
          </AppStyled>
        </ScrollToTop>
        <GlobalStyle />
      </Fragment>
    </ThemeProvider>
  </ConnectedRouter>
);

export default App;
