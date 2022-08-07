import React from 'react';
import TodoCreateForm from '../../components/molecules/todo/TodoCreateForm';
import styled from 'styled-components';

const CreateTodo = () => {
  return (
    <CreateTodoContainer>
      <TodoCreateForm />
    </CreateTodoContainer>
  );
};

export default CreateTodo;

const CreateTodoContainer = styled.div`
  padding: 150px 50px;
`;
