import React from 'react';
import styled from 'styled-components';
import AccountForm from '../../components/organisms/user/AccountForm';

const SignUp = () => {
  return (
    <SignUpContainer>
      <TitleWrapper>
        <h2>📄 회원 가입</h2>
      </TitleWrapper>
      <AccountForm url="create" name="회원가입" />
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 150px;
`;

const TitleWrapper = styled.div`
  margin-right: 220px;
  margin-bottom: 30px;
`;
