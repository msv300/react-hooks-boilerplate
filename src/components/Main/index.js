import React, { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/Main/actions';
import { fetchTodos } from '../../store/Main/apis';
import Loader from '../Loader';

const Error = ({ errMsg }) => <p className="error">{errMsg}</p>;

const TodoWrapper = () => {
  const dispatch = useDispatch();
  const { error, data } = fetchTodos();

  if (error) return <Error errMsg={error} />

  if (!data) return null;
  else dispatch(actions.receivedTodos(data));  // if you really want to save data in redux store

  return (
    <p className="primary">
      Todo Title: {data.title}
    </p>
  );
}

const Main = () => (
  <div className="wrapper">
    <Suspense fallback={<Loader />}>
      <TodoWrapper />
    </Suspense>
  </div>
);


export default Main;
