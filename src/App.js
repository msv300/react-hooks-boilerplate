import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';

import store from './store/configureStore';
import reactImg from './assets/react.svg';
import Loader from './components/Loader';

const Main = lazy(() => import('./components/Main'));
const Counter = lazy(() => import('./components/Counter'));

const App = () => (
  <Provider store={store}>
    <div className="container">
      <img className="imgLogo" src={reactImg} alt="React Hooks" />
      <span className="primary heading">React Hooks App</span>
    </div>

    <Suspense fallback={<Loader />}>
      <Counter />
      <Main />
    </Suspense>
  </Provider>
);

export default App;
