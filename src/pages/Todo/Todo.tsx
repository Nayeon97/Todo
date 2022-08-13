import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { editState, loginState } from '../../common/atom';
import Template from '../../components/templates/Template';
import TodoEditForm from '../../components/molecules/todo/TodoEditForm';
import TodoForm from '../../components/molecules/todo/TodoForm';
import TodoHeader from '../../components/molecules/todo/TodoHeader';

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
    <Template>
      <TodoHeader />
      {checkEditState ? <TodoEditForm /> : <TodoForm />}
    </Template>
  );
};

export default Todo;
