import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { editState } from '../../../common/atom';
import Button from '../../atoms/Button';

const TodoHeader = () => {
  const navigate = useNavigate();
  const setEditState = useSetRecoilState(editState);
  const resetEditState = useResetRecoilState(editState);

  const clickLogout = () => {
    resetEditState();
    window.localStorage.removeItem('token');
    navigate('/');
  };

  const clickHome = () => {
    navigate('/todolist');
    setEditState(false);
  };

  return (
    <HeaderContainer>
      <div>
        <Button name="Home" onClick={clickHome} btnType="home" />
      </div>
      <div>
        <Button name="logout" onClick={clickLogout} btnType="logout" />
      </div>
    </HeaderContainer>
  );
};
export default TodoHeader;

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 70px;
  justify-content: space-start;
  margin-bottom: 30px;
`;
