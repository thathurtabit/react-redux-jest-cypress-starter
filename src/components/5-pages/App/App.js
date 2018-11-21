import React, { Component, Fragment } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { Route, Switch } from "react-router"; // react-router v4
import { ConnectedRouter } from "connected-react-router";
import PropTypes from "prop-types";
import { createBrowserHistory } from "history";
import { onLoad } from "../../../state/actions/onLoad";
import theme from "../../../theme/theme";
import logo from "./assets/logo.svg";
import Loading from "../../1-atoms/Loading/Loading";
import AppStyled, { Header, Logo, Link } from "./App.styled";
import ScrollToTop from "../../../utils/helpers/ScrollToTop";

const history = createBrowserHistory();

const mapStateToProps = state => ({
  history: state.history,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  onLoad: loading => dispatch(onLoad(loading))
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.setLoading = this.setLoading.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.setLoading, { once: true });
  }

  setLoading() {
    const { onLoad, loading } = this.props;
    setTimeout(() => {
      onLoad(loading);
    }, 200);
  }

  render() {
    const { loading } = this.props;
    return (
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Fragment>
            <ScrollToTop>
              <Switch>
                <Route exact path="/" render={() => <div>Match</div>} />
                <Route render={() => <div>Miss</div>} />
              </Switch>
              <AppStyled>
                <Header>
                  <Logo src={logo} alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <Link
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </Link>
                </Header>
                <GlobalStyle />
              </AppStyled>
            </ScrollToTop>
            <Loading loading={loading} />
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
  loading: PropTypes.bool.isRequired
};
