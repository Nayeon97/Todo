import React, { useEffect } from 'react';
import TodoCreateForm from '../../components/molecules/todo/TodoCreateForm';
import styled from 'styled-components';
import TodoHome from '../../components/molecules/todo/TodoHome';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../common/atom';

const CreateTodo = () => {
  const navigate = useNavigate();
  const checkLoginState = useRecoilValue(loginState);

  useEffect(() => {
    if (!checkLoginState) {
      alert('로그인 후 이용해주세요.');
      navigate('/');
    }
  }, []);

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
