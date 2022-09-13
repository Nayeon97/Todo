import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSetRecoilState } from 'recoil';
import { updateTodo } from '../api/todoApi';
import { editState } from '../common/atom';
import { TodoId } from '../common/types';
import SnackBar from '../components/atoms/SnackBar';

interface UpdateTodoProps {
  title: string;
  content: string;
}

const useUpdateTodo = (id: TodoId) => {
  const queryClient = useQueryClient();
  const setEditeState = useSetRecoilState(editState);

  return useMutation((todo: UpdateTodoProps) => updateTodo(id, todo), {
    onSuccess: () => {
      queryClient.invalidateQueries(['todo', id]);
      queryClient.invalidateQueries(['todos']);
      setEditeState(false);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        SnackBar('error', error.message);
      }
    },
  });
};

export default useUpdateTodo;
