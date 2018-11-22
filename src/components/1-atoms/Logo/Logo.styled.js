import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SVG = styled.svg`
  animation: ${spin} 20s linear infinite;
  fill: ${props => props.theme.colors.brand};
  max-width: ${props => (props.loader ? '50px' : '400px')};
  width: 100%;
`;
