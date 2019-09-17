import axios from 'axios';
import useFetch from "../../../utils/useFetch";
import * as actions from './actions';

export const fetchTodos = async () => {
  try {
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
  } catch (e) {
    console.log("****** ::", e);
    return ({ error: "Unable to fetch data." });
  }
}

export const fetchDataUsingCustomHook = () => {
  return useFetch(
    'https://jsonplaceholder.typicode.com/todos/1',
    {
      onStart: actions.fetchTodos,
      onSuccess: actions.receivedTodos,
    }
  );
}
