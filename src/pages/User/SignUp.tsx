import React, { useState } from 'react';
import Input from '../../components/Input';
import 'styled-components';
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

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  return (
    <div>
      <Input
        type="email"
        name="email"
        value={register.email}
        onChange={onChange}
      />
      <Input
        type="password"
        name="password"
        value={register.password}
        onChange={onChange}
      />
      <Button
        name={'연습'}
        onClick={() => {
          console.log('일단');
        }}
      />
    </div>
  );
};

export default SignUp;
