import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

interface AccountTypes {
  email: string;
  password: string;
}

interface AccountProp {
  url: string;
  name: string;
}

const AccountForm = ({ url, name }: AccountProp) => {
  const [account, setAccount] = useState<AccountTypes>({
    email: '',
    password: '',
  });

  const validateEmail = (email: string) => {
    const checkEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkEmail.test(email);
  };

  const isActive = validateEmail(account.email) && account.password.length > 7;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const onClick = () => {
    console.log(url);
  };

  return (
    <>
      <InputWrapper>
        <div>이메일</div>
        <Input
          type="email"
          name="email"
          value={account.email}
          onChange={onChange}
        />
      </InputWrapper>
      <InputWrapper>
        <div>비밀번호</div>
        <Input
          type="password"
          name="password"
          value={account.password}
          onChange={onChange}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button name={name} disabled={!isActive} onClick={onClick} />
      </ButtonWrapper>
    </>
  );
};

export default AccountForm;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;
