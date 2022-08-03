import React, { useState } from 'react';
import Input from '../../components/Input';
import styled from 'styled-components';
import Button from '../../components/Button';

interface UserInfo {
  email: string;
  password: string;
}

const SignUp = () => {
  const [register, setRegister] = useState<UserInfo>({
    email: '',
    password: '',
  });

  const validateEmail = (email: string) => {
    const checkEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkEmail.test(email);
  };

  const isActive =
    validateEmail(register.email) && register.password.length > 7;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  return (
    <SignUpContainer>
      <TitleWrapper>
        <h2>📄 회원 가입</h2>
      </TitleWrapper>
      <InputWrapper>
        <div>이메일</div>
        <Input
          type="email"
          name="email"
          value={register.email}
          onChange={onChange}
        />
      </InputWrapper>
      <InputWrapper>
        <div>비밀번호</div>
        <Input
          type="password"
          name="password"
          value={register.password}
          onChange={onChange}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button
          name={'회원가입'}
          disabled={!isActive}
          onClick={() => {
            console.log('일단');
          }}
        />
      </ButtonWrapper>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  display: grid;
  place-items: center;
  padding-top: 150px;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const TitleWrapper = styled.div`
  margin-right: 220px;
  margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;
