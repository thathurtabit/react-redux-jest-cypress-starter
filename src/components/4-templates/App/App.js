import React, { Component, Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import WebFont from 'webfontloader';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import { Route } from 'react-router-dom';
import { onLoad } from '../../../state/actions/onLoad';
import GATracker from '../../../utils/helpers/GATracker';
import theme from '../../../theme/theme';
import Loading from '../../1-atoms/Loading/Loading';
import Routes from '../Routes/Routes';
import Header from '../../2-molecules/Header/Header';
import AppStyled from './App.styled';
import ScrollToTop from '../../../utils/helpers/ScrollToTop';
import { loadDelay } from '../../../utils/constants/constants';

const history = createBrowserHistory();

const mapStateToProps = state => ({
  history: state.history,
  loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  onLoad: loading => dispatch(onLoad(loading)),
});

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

class App extends Component {
  constructor(props) {
    super(props);
    this.setLoading = this.setLoading.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.setLoading, { once: true });
  }

  setLoading() {
    const { onLoad } = this.props;
    setTimeout(() => {
      onLoad(false);
    }, loadDelay);
  }

  render() {
    const { loading } = this.props;
    return (
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Fragment>
            <ScrollToTop>
              <AppStyled loading={loading}>
                <Header />
                <Route path="/" component={GATracker(Routes, {})} />
              </AppStyled>
            </ScrollToTop>
            <Loading loading={loading} />

            <GlobalStyle />
          </Fragment>
        </ThemeProvider>
      </ConnectedRouter>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

App.propTypes = {
  onLoad: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
