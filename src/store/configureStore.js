import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from "react-router-redux";
import rootReducer from "./rootReducer";

const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

let store = createStore(
  rootReducer,
  fromJS({}),
  composeEnhancers(applyMiddleware(
    routerMiddleware(createBrowserHistory())
  )),
);

export default store;