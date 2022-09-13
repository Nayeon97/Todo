import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from '../api/todoApi';
import { AxiosError } from 'axios';
import SnackBar from '../components/atoms/SnackBar';
import { useNavigate } from 'react-router-dom';
import { TodoId } from '../common/types';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation((id: TodoId) => deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
      navigate('/todolist');
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        SnackBar('error', error.message);
      }
    },
  });
};

export default useDeleteTodo;
