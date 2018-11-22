import React from "react";

import HeaderStyled, { Link } from "./Header.styled";

const Header = () => (
  <HeaderStyled>
    <Link to="/" exact activeClassName="active" title="Home">
      Home
    </Link>
    <Link to="/features" exact activeClassName="active" title="Features">
      Features
    </Link>
  </HeaderStyled>
);

export default Header;
