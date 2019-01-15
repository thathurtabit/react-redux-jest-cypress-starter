import React from 'react';

import HeaderStyled, { Link } from './Header.styled';

const Header = () => (
  <HeaderStyled>
    <Link to="/" exact activeClassName="active" title="Home">
      Home
    </Link>
    <Link to="/features" exact activeClassName="active" title="Features">
      Features
    </Link>
    <Link to="/fetch-data" exact activeClassName="active" title="Fetch Data">
      Fetch
    </Link>
  </HeaderStyled>
);

export default Header;
