import React, { Fragment } from "react";
import PageTitle from '../../1-atoms/PageTitle/PageTitle';
import {UL} from './Features.styled';

const Features = () => <Fragment>
  <PageTitle title="Featuring" />
  <UL>
    <li>React</li>
    <li>Redux</li>
  </UL>
  </Fragment>;

export default Features;
