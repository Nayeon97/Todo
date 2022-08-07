import React, { useEffect } from 'react';
import { instance } from '../../api/index';
import styled from 'styled-components';
import TodoListCard from '../../components/molecules/todo/TodoListCard';

const TodoList = () => {
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    try {
      const res = await instance.get('/todos');
      console.log(res.data);
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <TodoCardContainer>
      <TodoListCard />
    </TodoCardContainer>
  );
};

export default TodoList;

const TodoCardContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 100px;
`;
