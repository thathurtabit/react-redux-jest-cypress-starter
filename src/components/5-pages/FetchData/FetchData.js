import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FetchDataStyled from './FetchData.styled';

const mapStateToProps = state => ({
  response: state.data.response,
});

const FetchData = ({ response }) => (
  <FetchDataStyled>{response}</FetchDataStyled>
);

export default connect(mapStateToProps)(FetchData);

FetchData.propTypes = {
  response: PropTypes.arrayOf(PropTypes.string),
};

FetchData.defaultProps = {
  response: [],
};
