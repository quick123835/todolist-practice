import axios from 'axios';

const baseUrl = 'http://localhost:3004';

export const getTodos = async () => {
  try {
    const res = await axios.get(`${baseUrl}/todos`);
    return res.data;
  } catch (error) {
    console.error('[Get Todos Failed]', error);
  }
};
export const createTodo = async (payload) => {
  const { title, isDone } = payload;
  try {
    const res = await axios.post(`${baseUrl}/todos`, {
      title,
      isDone,
    });
    return res.data;
  } catch (error) {
    console.eorror('[Create Todo Failed]', error);
  }
};
export const patchTodo = async (payload) => {
  const { title, isDone, id } = payload;
  try {
    const res = await axios.patch(`${baseUrl}/todos/${id}`, {
      title,
      isDone,
    });
    return res.data;
  } catch (error) {
    console.eorror('[Patch Todo Failed]', error);
  }
};
export const deleteTodo = async (id) => {
  try {
    const res = axios.delete(`${baseUrl}/todos/${id}`);
    return res.data;
  } catch (error) {
    console.eorror('[Delete Todo Failed]', error);
  }
};
