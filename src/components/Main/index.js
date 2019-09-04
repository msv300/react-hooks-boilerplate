import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/Main/actions';
import { getCounter } from '../../store/Main/selectors';
import './index.css';
import reactImg from '../../assets/react.svg';

const Main = () => {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch();

  const incrementCounter = () => dispatch(actions.incrementCounter());  
  const decrementCounter = () => dispatch(actions.decrementCounter());

  return (
    <>
      <div className="wrapper">
        <img className="imgLogo" src={reactImg} alt="React Hooks" />
        <span className="primary heading">React Hooks App</span>
      </div>
      <div className="wrapper">
        <p className="primary">
          Counter: {counter}
        </p>
      </div>
      <div className="wrapper">
        <button onClick={incrementCounter}>Add</button>
        <button onClick={decrementCounter}>Subtract</button>
      </div>
    </>
  )
};

export default Main;
