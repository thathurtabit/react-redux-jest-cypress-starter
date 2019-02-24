import React, { Component, Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import WebFont from 'webfontloader';
import { Route } from 'react-router-dom';
import { history } from '../../../state/store/store';
import GATracker from '../../../utils/helpers/GATracker';
import theme from '../../../theme/theme';
import Routes from '../Routes/Routes';
import Header from '../../2-molecules/Header/Header';
import AppStyled, { GlobalStyles } from './App.styled';
import ScrollToTop from '../../../utils/helpers/ScrollToTop';
import { setReady } from '../../../state/actions/setReady';

const GlobalStyle = createGlobalStyle`
  ${GlobalStyles};
`;

WebFont.load({
  google: {
    families: ['Poppins'],
  },
});

const mapDispatchToProps = dispatch => ({
  setReady: bool => dispatch(setReady(bool)),
});

class App extends Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.onLoad, { once: true });
  }

  onLoad() {
    const { setReady } = this.props;
    setReady(true); // Dispatch redux action
  }

  render() {
    return (
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
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);

App.propTypes = {
  setReady: PropTypes.func.isRequired,
};
