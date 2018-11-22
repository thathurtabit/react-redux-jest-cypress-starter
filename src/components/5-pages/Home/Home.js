import React, { Fragment } from "react";
import Logo from "../../1-atoms/Logo/Logo";
import { Link } from "./Home.styled";

const Home = () => (
  <Fragment>
    <Logo title="React Logo" />
    <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      Learn React
    </Link>
  </Fragment>
);

export default Home;
