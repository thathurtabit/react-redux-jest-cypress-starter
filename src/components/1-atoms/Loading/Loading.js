import React from "react";
import PropTypes from "prop-types";
import LoaderStyled from "./Loading.styled";

const Loading = ({ loading }) => <LoaderStyled loading>Loading</LoaderStyled>;

export default Loading;

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
};
