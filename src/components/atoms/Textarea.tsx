import React from 'react';
import styled from 'styled-components';

interface TextareaProps {
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea = ({ name, value, placeholder, onChange }: TextareaProps) => {
  return (
    <TextareaWrapper
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const TextareaWrapper = styled.textarea`
  width: 400px;
  height: 300px;
  padding: 10px;
  border: none;
  resize: none;
  font-size: 15px;
  margin-top: 10px;
  background-color: #f8f9fa;
`;

export default Textarea;
