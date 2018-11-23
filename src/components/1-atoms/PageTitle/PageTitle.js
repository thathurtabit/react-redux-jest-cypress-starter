import React from 'react';
import PropTypes from 'prop-types';
import Title from './PageTitle.styled'

const PageTitle = ({title}) => <Title>{title}</Title>;

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
}