import styled from "styled-components";

const LoaderStyled = styled.small`
  display ${props => (props.loading ? "block" : "none")};
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default LoaderStyled;
