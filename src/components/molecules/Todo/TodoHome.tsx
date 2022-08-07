import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../atoms/Button';

const TodoHome = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/todolist');
  };

  return (
    <ButtonWrapper>
      <Button name="Home" onClick={onClick} btnType={'home'} />
    </ButtonWrapper>
  );
};

export default TodoHome;

const ButtonWrapper = styled.div`
  margin-bottom: 20px;
`;
