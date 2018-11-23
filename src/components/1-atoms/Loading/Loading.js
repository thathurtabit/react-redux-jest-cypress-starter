import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import RoutesTransition from '../../4-templates/Routes/Routes.styled';
import LoaderStyled from './Loading.styled';
import Logo from '../Logo/Logo';
import { loadDelay } from '../../../utils/constants/constants';

const Loading = () => (
  <TransitionGroup>
    <CSSTransition classNames="fade" timeout={loadDelay}>
      <RoutesTransition>
        <LoaderStyled aria-label="Loading" className="fade">
          <Logo title="Loading" loader />
        </LoaderStyled>
      </RoutesTransition>
    </CSSTransition>
  </TransitionGroup>
);

export default Loading;
