import React, { useEffect } from 'react';
import { instance } from '../../api/index';
import styled from 'styled-components';
import TodoListCard from '../../components/molecules/todo/TodoListCard';
import TodoAdd from '../../components/molecules/todo/TodoAdd';

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
    <TodoListContainer>
      <TodoListCardsContainer>
        <TodoListCard />
      </TodoListCardsContainer>
      <TodoAdd />
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 100px;
`;

const TodoListCardsContainer = styled.div`
  height: 450px;
  padding: 5px;
  margin-bottom: 10px;
`;
