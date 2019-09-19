import { useFetch } from 'react-hooks-fetch';

export const fetchTodos = () => {
  return useFetch('https://jsonplaceholder.typicode.com/todos/1')
}