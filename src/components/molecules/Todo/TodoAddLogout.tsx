import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { editState, loginState } from '../../../common/atom';
import Button from '../../atoms/Button';

const TodoAddLogout = () => {
  const resetLoginState = useResetRecoilState(loginState);
  const resetEditState = useResetRecoilState(editState);
  const navigate = useNavigate();

  const clickAdd = () => {
    navigate('/todocreate');
  };

  const clickLogout = () => {
    resetLoginState();
    resetEditState();
    window.localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <Button name="+" onClick={clickAdd} btnType="add" />
      <Button name="logout" onClick={clickLogout} btnType="logout" />
    </>
  );
};

export default TodoAddLogout;
