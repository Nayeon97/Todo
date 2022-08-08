import React, { useEffect } from 'react';
import TodoCreateForm from '../../components/molecules/todo/TodoCreateForm';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../common/atom';

import TodoHeader from '../../components/molecules/todo/TodoHeader';
import Container from '../../components/atoms/Container';

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
    <Container>
      <TodoHeader />
      <TodoCreateForm />
    </Container>
  );
};

export default CreateTodo;
