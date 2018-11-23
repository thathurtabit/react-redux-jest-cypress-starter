import styled from 'styled-components';

const Title = styled.h1`
  letter-spacing: 2px;
  font-size: calc(${props => props.theme.fonts.baseSize} + 0.5vmin);
  position: relative;
  text-transform: uppercase;
`;

export default Title;
