import React, { Suspense, lazy, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import RoutesTransition, { Content } from './Routes.styled';
import { loadDelay } from '../../../utils/constants/constants';
import LoadingSmall from '../../1-atoms/LoadingSmall/LoadingSmall';

// Use React.lazy for lazyload / code splitting
const Home = lazy(() => import('../../5-pages/Home/Home'));
const Features = lazy(() => import('../../5-pages/Features/Features'));
const FetchData = lazy(() => import('../../5-pages/FetchData/FetchData'));
const FourOhFour = lazy(() => import('../../5-pages/FourOhFour/FourOhFour'));

const mapStateToProps = state => ({
  isReady: state.app.isReady,
});

const Routes = ({ location, isReady }) => {
  const locationPath = location.pathname;

  return (
    <Fragment>
      {!isReady && <LoadingSmall />}
      <CSSTransition
        key={locationPath}
        in={isReady}
        classNames="fade"
        appear
        timeout={loadDelay}
      >
        <RoutesTransition className="fade">
          <Content>
            <Suspense fallback={<LoadingSmall />}>
              <Switch location={location}>
                <Route exact path="/" component={() => <Home />} />
                <Route path="/features" component={() => <Features />} />
                <Route path="/fetch-data" component={() => <FetchData />} />
                <Route component={() => <FourOhFour />} />
              </Switch>
            </Suspense>
          </Content>
        </RoutesTransition>
      </CSSTransition>
    </Fragment>
  );
};

export default connect(mapStateToProps)(Routes);

Routes.propTypes = {
  isReady: PropTypes.bool.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};
