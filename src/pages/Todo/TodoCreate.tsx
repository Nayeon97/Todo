import React from 'react';
import TodoCreateForm from '../../components/molecules/todo/TodoCreateForm';

import TodoHeader from '../../components/molecules/todo/TodoHeader';
import Template from '../../components/templates/Template';

const CreateTodo = () => {
  return (
    <Template>
      <TodoHeader />
      <TodoCreateForm />
    </Template>
  );
};

export default CreateTodo;
