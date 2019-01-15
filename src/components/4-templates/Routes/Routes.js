import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import RoutesTransition, { Content } from './Routes.styled';
import { loadDelay } from '../../../utils/constants/constants';
import Loading from '../../1-atoms/Loading/Loading';

// Use React.lazy for lazyload / code splitting
const Home = lazy(() => import('../../5-pages/Home/Home'));
const Features = lazy(() => import('../../5-pages/Features/Features'));
const FetchData = lazy(() => import('../../5-pages/FetchData/FetchData'));
const FourOhFour = lazy(() => import('../../5-pages/FourOhFour/FourOhFour'));

const mapStateToProps = state => ({
  isReady: state.isReady,
});

const Routes = ({ location, isReady }) => {
  const locationPath = location.pathname;

  return (
    <CSSTransition
      key={locationPath}
      in={isReady}
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
              <Route path="/fetch-data" component={() => <FetchData />} />
              <Route component={() => <FourOhFour />} />
            </Switch>
          </Suspense>
        </Content>
      </RoutesTransition>
    </CSSTransition>
  );
};

export default connect(mapStateToProps)(Routes);

Routes.propTypes = {
  isReady: PropTypes.bool.isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};
