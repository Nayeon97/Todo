import React from 'react';
import styled from 'styled-components';
import TodoListCard from '../../components/molecules/todo/TodoListCard';
import TodoAdd from '../../components/molecules/todo/TodoAdd';
import TodoHeader from '../../components/molecules/todo/TodoHeader';
import Template from '../../components/templates/Template';
import useGetTodoList from '../../hooks/useGetTodoList';

interface TodoTypes {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const TodoList = () => {
  const { data, isLoading } = useGetTodoList();

  return (
    <>
      <Template>
        <TodoHeader />
        <TodoListCardsContainer>
          {data?.data.map((todo: TodoTypes) => {
            return (
              <TodoListCard
                key={todo.id}
                id={todo.id}
                title={todo.title}
                date={todo.updatedAt}
              />
            );
          })}
          {isLoading && <h2>Loading...</h2>}
        </TodoListCardsContainer>
        <TodoAdd />
      </Template>
    </>
  );
};

export default TodoList;

const TodoListCardsContainer = styled.div`
  height: 400px;
  padding: 5px;
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 10px;
`;
