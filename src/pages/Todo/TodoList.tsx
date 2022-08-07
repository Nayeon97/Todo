import React, { useEffect, useState } from 'react';
import { instance } from '../../api/index';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../common/atom';
import TodoListCard from '../../components/molecules/todo/TodoListCard';
import TodoAddLogout from '../../components/molecules/todo/TodoAddLogout';
import { useNavigate } from 'react-router-dom';

interface TodoTypes {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoTypes[]>([]);
  const navigate = useNavigate();
  const checkLoginState = useRecoilValue(loginState);

  useEffect(() => {
    if (!checkLoginState) {
      alert('로그인 후 이용해주세요.');
      navigate('/');
    } else {
      getTodo();
    }
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
              date={todo.updatedAt}
            />
          );
        })}
      </TodoListCardsContainer>
      <TodoAddLogout />
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
