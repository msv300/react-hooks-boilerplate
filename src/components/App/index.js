import React from 'react';
import './App.css';
import reactImg from '../../assets/react.svg';

const App = () => (
  <div className="wrapper">
    <img className="imgLogo" src={reactImg} alt="React Hooks" />
    <span className="primary">React Hooks App</span>
  </div>
);

export default App;
