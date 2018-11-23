import React from 'react';
import PropTypes from 'prop-types';
import Title from './SubTitle.styled';

const SubTitle = ({ title }) => <Title>{title}</Title>;

export default SubTitle;

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
