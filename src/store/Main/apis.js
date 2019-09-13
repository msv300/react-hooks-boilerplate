import axios from 'axios';

export const fetchTodos = async () => {
  try {
    let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return response.data;
  } catch (e) {
    console.log("****** ::", e);
    return ({ error: "Unable to fetch data." });
  }
}