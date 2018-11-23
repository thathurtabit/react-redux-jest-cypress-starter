import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import RoutesTransition, { Content } from './Routes.styled';
import { loadDelay } from '../../../utils/constants/constants';
import Loading from '../../1-atoms/Loading/Loading';

// Use React.lazy for lazyload / code splitting
const Home = lazy(() => import('../../5-pages/Home/Home'));
const Features = lazy(() => import('../../5-pages/Features/Features'));
const FourOhFour = lazy(() => import('../../5-pages/FourOhFour/FourOhFour'));

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
            <Suspense fallback={<Loading />}>
              <Switch location={location}>
                <Route exact path="/" component={() => <Home />} />
                <Route path="/features" component={() => <Features />} />
                <Route component={FourOhFour} />
              </Switch>
            </Suspense>
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
