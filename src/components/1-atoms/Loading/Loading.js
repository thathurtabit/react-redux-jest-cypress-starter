import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import RoutesTransition from '../../4-templates/Routes/Routes.styled';
import LoaderStyled from './Loading.styled';
import Logo from '../Logo/Logo';
import { loadDelay } from '../../../utils/constants/constants';

const Loading = ({ loading }) => (
  <TransitionGroup>
    <CSSTransition in={loading} classNames="fade" timeout={loadDelay}>
      <RoutesTransition>
        <LoaderStyled aria-label="Loading" className="fade">
          <Logo title="Loading" loader />
        </LoaderStyled>
      </RoutesTransition>
    </CSSTransition>
  </TransitionGroup>
);

export default Loading;

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};
