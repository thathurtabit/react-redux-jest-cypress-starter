import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const App = styled.section`
  text-align: center;
`;

export const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 40vmin;
`;

export const Header = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`;

export const Link = styled.a`
  color: #61dafb;
`;

export default App;
