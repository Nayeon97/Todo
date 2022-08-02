import React from 'react';

interface InputProps {
  name: string;
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ name, value, type, onChange }: InputProps) => {
  return <input name={name} value={value} onChange={onChange} type={type} />;
};

export default Input;
