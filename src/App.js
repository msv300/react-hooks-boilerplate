import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useSelector, useDispatch, Provider } from 'react-redux';

import Context from '../utils/context';
import Main from './components/Main';
import store from './store/configureStore';

// const store = createStore({});

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Main}></Route>
      </Router>
    </Provider>
  )
};

export default App;
