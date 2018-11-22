import styled from 'styled-components';

const AppStyled = styled.section`
  text-align: center;
  min-height: 100vh;
  opacity: ${props => (props.loading ? '0' : '1')};
`;

export default AppStyled;
