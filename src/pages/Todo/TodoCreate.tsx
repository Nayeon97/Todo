import React from 'react';
import TodoCreateForm from '../../components/molecules/todo/TodoCreateForm';
import styled from 'styled-components';
import TodoHome from '../../components/molecules/todo/TodoHome';

const CreateTodo = () => {
  return (
    <CreateTodoContainer>
      <TodoHome />
      <TodoCreateForm />
    </CreateTodoContainer>
  );
};

export default CreateTodo;

const CreateTodoContainer = styled.div`
  padding: 100px 50px;
`;
