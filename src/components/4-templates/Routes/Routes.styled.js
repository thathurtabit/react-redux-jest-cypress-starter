import styled from 'styled-components';

export const Content = styled.section`
  opacity: 0;
  overflow: hidden;
  transform: translateY(20px);
  transition: opacity ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut},
    transform ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut};

  .fade-enter-done & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const RoutesTransition = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  min-height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
`;

export default RoutesTransition;
