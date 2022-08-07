import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { editState, loginState } from '../../common/atom';
import TodoEditForm from '../../components/molecules/todo/TodoEditForm';
import TodoForm from '../../components/molecules/todo/TodoForm';
import TodoHome from '../../components/molecules/todo/TodoHome';

const Todo = () => {
  const navigate = useNavigate();
  const checkLoginState = useRecoilValue(loginState);
  const checkEditState = useRecoilValue(editState);

  useEffect(() => {
    if (!checkLoginState) {
      alert('로그인 후 이용해주세요.');
      navigate('/');
    }
  }, []);

  return (
    <TodoContainer>
      {checkEditState ? <TodoEditForm /> : <TodoForm />}
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 100px;
`;
