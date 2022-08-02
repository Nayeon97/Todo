import React, { useEffect, useState } from 'react';
import Input from '../../components/Input';

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
    </div>
  );
};

export default SignUp;
