import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import initState from "./initState";

const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  connectRouter(history)(rootReducer),
  initState,
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

// For mock testing
export const mockStore = createStore(
  connectRouter(history)(rootReducer),
  initState,
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

export default Store;
