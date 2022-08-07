import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button';

const Main = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <TitleWrapper>
        <h1>wanted Todo 🤔</h1>
      </TitleWrapper>
      <ButtonWrapper>
        <Button
          name={'로그인 하기'}
          onClick={() => navigate('/signin')}
          btnType="submit"
        />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          name={'회원가입 하기'}
          onClick={() => navigate('/signup')}
          btnType="submit"
        />
      </ButtonWrapper>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 150px;
`;

const TitleWrapper = styled.div`
  width: 300px;
  height: 50px;
  padding: 10px 10px;
  border-radius: 10px;
  margin-bottom: 50px;
  text-align: center;
  background-color: #dcf6ff;
  h1 {
    font-family: 'Pretendard-Medium';
    color: #32dda8;
  }
`;

const ButtonWrapper = styled.div`
  margin: 10px 0px;
`;
