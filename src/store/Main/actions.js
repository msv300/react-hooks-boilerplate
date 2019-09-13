import { types } from './reducer';

export const incrementCounter = () => ({
  type: types.ADD_COUNTER
})

export const decrementCounter = () => ({
  type: types.SUBTRACT_COUNTER
});

export const fetchTodos = () => ({
  type: types.FETCH_TODOS
});

export const receivedTodos = (result) => ({
  type: types.RECEIVED_TODOS,
  result
});