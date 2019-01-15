import styled, { keyframes } from 'styled-components';

const Anim1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

const Anim2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`;

const Anim3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const LoadingStyled = styled.div`
  display: inline-block;
  height: 64px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 64px;

  div {
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    background: ${props => props.theme.loader.dots};
    border-radius: 50%;
    height: 11px;
    position: absolute;
    top: 27px;
    width: 11px;

    &:nth-child(1) {
      left: 6px;
      animation: ${Anim1} 0.6s infinite;
    }
    &:nth-child(2) {
      left: 6px;
      animation: ${Anim2} 0.6s infinite;
    }
    &:nth-child(3) {
      left: 26px;
      animation: ${Anim2} 0.6s infinite;
    }
    &:nth-child(4) {
      left: 45px;
      animation: ${Anim3} 0.6s infinite;
    }
  }
`;

export default LoadingStyled;
