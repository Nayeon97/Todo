import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';

const TodoAdd = () => {
  const navigate = useNavigate();

  const clickAdd = () => {
    navigate('/todocreate');
  };

  return (
    <>
      <Button name="+" onClick={clickAdd} btnType="home" />
    </>
  );
};

export default TodoAdd;
