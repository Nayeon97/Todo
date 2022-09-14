import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../api/todoApi';
import { AxiosError } from 'axios';
import SnackBar from '../components/atoms/SnackBar';
import { useNavigate } from 'react-router-dom';

interface PostTodoProps {
  title: string;
  content: string;
}

const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation((todo: PostTodoProps) => createTodo(todo), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
      navigate('/todolist');
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        SnackBar(error.response?.data?.details, 'error');
      }
    },
  });
};

export default useCreateTodo;
