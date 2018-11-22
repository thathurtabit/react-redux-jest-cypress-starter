import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import FourOhFour from '../../5-pages/FourOhFour/FourOhFour';
import Home from '../../5-pages/Home/Home';
import Features from '../../5-pages/Features/Features';
import RoutesTransition, { Content } from './Routes.styled';
import { loadDelay } from '../../../utils/constants/constants';

const mapStateToProps = state => ({
  loading: state.loading,
});

const Routes = ({ ...props }) => {
  const { location, loading } = props;
  const locationPath = location.pathname;

  return (
    <TransitionGroup>
      <CSSTransition
        key={locationPath}
        in={!loading}
        classNames="fade"
        appear
        timeout={loadDelay}
      >
        <RoutesTransition className="fade">
          <Content>
            <Switch location={location}>
              <Route exact path="/" component={() => <Home />} />
              <Route exact path="/features" component={() => <Features />} />
              <Route component={FourOhFour} />
            </Switch>
          </Content>
        </RoutesTransition>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default connect(mapStateToProps)(Routes);

Routes.propTypes = {
  loading: PropTypes.bool.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};
