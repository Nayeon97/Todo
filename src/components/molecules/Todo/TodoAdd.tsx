import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../atoms/Button';

const TodoAdd = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/todocreate');
  };

  return <Button name="+" onClick={onClick} btnType={'add'} />;
};

export default TodoAdd;
