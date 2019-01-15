import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  border-radius: 30px;
  color: ${props => props.theme.colors.brand};
  display: inline-block;
  font-size: calc(${props => props.theme.fonts.baseSize} - 3px);
  font-weight: 600;
  letter-spacing: 2px;
  padding: 5px 15px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &.active {
    color: ${props => props.theme.links.activeColor};
    background: ${props => props.theme.links.activeBg};
  }

  &:hover {
    text-decoration: none;
  }
`;

const HeaderStyled = styled.header`
  left: 0;
  padding: 20px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
`;

export default HeaderStyled;
