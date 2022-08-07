import React, { useEffect } from 'react';
import TodoCreateForm from '../../components/molecules/todo/TodoCreateForm';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../common/atom';
import TodoHeader from '../../components/molecules/todo/TodoHeader';

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
      <TodoHeader />
      <TodoCreateForm />
    </CreateTodoContainer>
  );
};

export default CreateTodo;

const CreateTodoContainer = styled.div`
  padding: 100px 50px;
`;
