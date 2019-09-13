import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/Main/actions';
import { getCounter, getTodo } from '../../store/Main/selectors';
import './index.css';
import reactImg from '../../assets/react.svg';
import { fetchTodos } from '../../store/Main/apis';

const Main = () => {
  const [todo, setTodo] = useState({});
  const [error, setError] = useState(null);
  const counter = useSelector(getCounter);
  const todo1 = useSelector(getTodo);
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(actions.fetchTodos());
    let response = await fetchTodos();
    if (response && !response.error) {
      setTodo(response);
      dispatch(actions.receivedTodos(response));
    } else {
      setError("Error while fetching data");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const incrementCounter = () => dispatch(actions.incrementCounter());
  const decrementCounter = () => dispatch(actions.decrementCounter());

  return (
    <>
      <div className="container">
        <img className="imgLogo" src={reactImg} alt="React Hooks" />
        <span className="primary heading">React Hooks App</span>
      </div>
      <div className="wrapper">
        <p className="primary">
          Counter: {counter}
        </p>
      </div>
      <div className="wrapper">
       {error && <p className="error">
          {error}
        </p>}
        {todo && todo.id && <>
          <p className="primary">
            Todo Title(state): {todo.title}
          </p>
          <p className="primary">
            Todo Title(store): {todo1.title}
          </p>
        </>}
      </div>
      <div className="container">
        <button onClick={incrementCounter}>Add</button>
        <button onClick={decrementCounter}>Subtract</button>
      </div>
    </>
  );
};

export default Main;
