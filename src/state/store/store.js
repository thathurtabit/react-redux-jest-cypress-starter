import { createBrowserHistory } from 'history';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import app from '../reducers/rootReducer';
import initState from './initState';

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createRootReducer = routeHistory =>
  combineReducers({
    router: connectRouter(routeHistory),
    app,
  });

const Store = createStore(
  createRootReducer(history), // root reducer with router state,
  initState,
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

// For mock testing
export const mockStore = createStore(
  createRootReducer(history), // root reducer with router state,
  initState,
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

export default Store;
