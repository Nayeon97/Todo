import React, { useEffect } from 'react';
import { instance } from '../../api/index';
import styled from 'styled-components';
import TodoCard from '../../components/molecules/todo/TodoCard';

const TodoList = () => {
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    const res = await instance.get('/todos');
    console.log(res.data);
  };

  return (
    <TodoCardContainer>
      <TodoCard />
    </TodoCardContainer>
  );
};

export default TodoList;

const TodoCardContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 100px;
`;
