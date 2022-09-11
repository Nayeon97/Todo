import React from 'react';
import { useRecoilValue } from 'recoil';
import { editState } from '../../common/atom';
import Template from '../../components/templates/Template';
import TodoEditForm from '../../components/molecules/todo/TodoEditForm';
import TodoForm from '../../components/molecules/todo/TodoForm';
import TodoHeader from '../../components/molecules/todo/TodoHeader';

const Todo = () => {
  const checkEditState = useRecoilValue(editState);

  return (
    <Template>
      <TodoHeader />
      {checkEditState ? <TodoEditForm /> : <TodoForm />}
    </Template>
  );
};

export default Todo;
