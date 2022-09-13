import React from 'react';
import { useRecoilValue } from 'recoil';
import { editState } from '../../common/atom';
import Template from '../../components/templates/Template';
import TodoEditForm from '../../components/molecules/todo/TodoEditForm';
import TodoForm from '../../components/molecules/todo/TodoForm';
import TodoHeader from '../../components/molecules/todo/TodoHeader';
import { useLocation } from 'react-router-dom';
import { TodoId } from '../../common/types';
import useGetTodoById from '../../hooks/useGetTodoById';

const Todo = () => {
  const checkEditState = useRecoilValue(editState);

  const location = useLocation();
  const state = location.state as TodoId;
  const { data: todo } = useGetTodoById(state);

  return (
    <Template>
      <TodoHeader />
      {checkEditState ? <TodoEditForm todo={todo} /> : <TodoForm todo={todo} />}
    </Template>
  );
};

export default Todo;
