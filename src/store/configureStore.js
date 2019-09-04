import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';
// import rootSaga from './configureSagas';
// // import history from '../browserhistory';
// import { routerMiddleware } from "react-router-redux";
import rootReducer from "./rootReducer";

// const sagaMiddleware = createSagaMiddleware();
// let composeEnhancers = compose;

// if (__DEV__) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }


// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const configureStore = (initialState) => {
//   let createdStore = createStore(
//     rootReducer,
//     fromJS(initialState),
//     composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware(history))),
//   );

//   sagaMiddleware.run(rootSaga);
//   return createdStore;
// };

const store = createStore(rootReducer, fromJS({}));

export default store;