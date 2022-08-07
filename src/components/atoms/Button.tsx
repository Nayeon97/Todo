import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name: string;
  btnType: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ name, disabled, onClick, btnType }: ButtonProps) => {
  return (
    <ButtonWrapper disabled={disabled} onClick={onClick} btnType={btnType}>
      {name}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button<{ btnType: string }>`
  width: ${(props) => (props.btnType === 'submit' ? '100px' : '50px')};
  height: ${(props) => (props.btnType === 'submit' ? '40px' : '50px')};
  background-color: #0a86f7;
  color: white;
  border: none;
  border-radius: ${(props) => (props.btnType === 'submit' ? '10px' : '50%')};
  cursor: pointer;
`;
