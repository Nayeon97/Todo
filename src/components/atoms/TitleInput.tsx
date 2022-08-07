import React from 'react';
import styled from 'styled-components';

interface InputProps {
  name: string;
  value: string;
  type: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TitleInput = ({
  name,
  value,
  type,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <InputWrapper
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default TitleInput;

const InputWrapper = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  color: #555;
  box-sizing: border-box;
  font-size: 18px;
  padding: 10px 0px;
  position: relative;
  width: 300px;
  margin-bottom: 20px;
`;
