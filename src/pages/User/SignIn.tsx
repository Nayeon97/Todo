import React from 'react';
import styled from 'styled-components';
import AccountForm from '../../components/molecules/user/AccountForm';

const SignIn = () => {
  return (
    <SignUpContainer>
      <TitleWrapper>
        <h2>🔑 로그인</h2>
      </TitleWrapper>
      <AccountForm url="login" name="로그인" />
    </SignUpContainer>
  );
};

export default SignIn;

const SignUpContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 150px;
`;

const TitleWrapper = styled.div`
  margin-right: 220px;
  margin-bottom: 30px;
  color: #339af0;
`;
