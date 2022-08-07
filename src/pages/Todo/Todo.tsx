import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../common/atom';
import TodoForm from '../../components/molecules/todo/TodoForm';

const Todo = () => {
  const checkLoginState = useRecoilValue(loginState);

  useEffect(() => {
    console.log(checkLoginState);
  }, []);

  return (
    <>
      <TodoForm />
    </>
  );
};

export default Todo;
