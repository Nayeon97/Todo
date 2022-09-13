import { instance } from '.';
import { TodoId } from '../common/types';

interface Todo {
  title: string;
  content: string;
}

interface TodoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface Response {
  [key: string]: TodoType[];
}

export const getTodoList = async () => {
  const res = await instance.get<Response>('/todos');
  return res.data;
};

export const getTodoById = async (id: TodoId) => {
  const res = await instance.get(`todos/${id}`);
  return res.data.data;
};

export const createTodo = async (todo: Todo) => {
  const res = await instance.post('/todos', todo);
  return res.data.data;
};

export const updateTodo = async (id: TodoId, todo: Todo) => {
  const res = await instance.put(`/todos/${id}`, todo);
  return res.data.data;
};

export const deleteTodo = async (id: TodoId) => {
  const res = await instance.delete(`todos/${id}`);
  return res.data.data;
};
