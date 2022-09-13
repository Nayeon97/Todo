import { useQuery } from '@tanstack/react-query';
import { getTodoById } from '../api/todoApi';
import { TodoId } from '../common/types';

const useGetTodoById = (id: TodoId) => {
  return useQuery(['todos', id], () => getTodoById(id));
};

export default useGetTodoById;
