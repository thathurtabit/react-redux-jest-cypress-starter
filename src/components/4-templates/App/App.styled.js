import styled, { css } from 'styled-components';

export const GlobalStyles = css`
  body {
    background: #040f13;
    color: #fff;
    margin: 0;
    min-height: 100vh;
    padding: 0;
    font-family: 'Poppins', sans-serif;
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
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const AppStyled = styled.section`
  text-align: center;
  min-height: 100vh;
  opacity: ${props => (props.loading ? '0' : '1')};
`;

export default AppStyled;
