import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/Main/actions';
import { getCounter } from '../../store/Main/selectors';

const Counter = () => {
  const counter = useSelector(getCounter);
  const dispatch = useDispatch();

  const incrementCounter = () => dispatch(actions.incrementCounter());
  const decrementCounter = () => dispatch(actions.decrementCounter());

  return (
    <div className="wrapper">
      <p className="primary">
        Counter: {counter}
      </p>
      <div className="container">
        <button onClick={incrementCounter}>Add</button>
        <button onClick={decrementCounter}>Subtract</button>
      </div>
    </div>
  )
}

export default Counter;