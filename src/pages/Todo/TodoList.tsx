import React, { useEffect, useState } from 'react';
import { instance } from '../../api/index';
import styled from 'styled-components';
import TodoListCard from '../../components/molecules/todo/TodoListCard';
import TodoAdd from '../../components/molecules/todo/TodoAdd';

interface TodoTypes {
  id: string;
  date: string;
  title: string;
  content?: string;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoTypes[]>([]);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    try {
      const res = await instance.get('/todos');
      setTodoList(res.data.data);
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <TodoListContainer>
      <TodoListCardsContainer>
        {todoList.map((todo) => {
          return (
            <TodoListCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              date={todo.date}
            />
          );
        })}
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
