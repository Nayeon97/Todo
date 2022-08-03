import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ name, disabled, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper disabled={disabled} onClick={onClick}>
      {name}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  width: 100px;
  height: 40px;
  background-color: #0a86f7;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
