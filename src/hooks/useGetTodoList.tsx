import { useQuery } from '@tanstack/react-query';
import { getTodoList } from '../api/todoApi';

const useGetTodoList = () => {
  return useQuery(['todos'], getTodoList);
};

export default useGetTodoList;
