import React from 'react';
import styled from 'styled-components';

interface TitleProps {
  title: string;
  type: string;
}

const Title = ({ title, type }: TitleProps) => {
  return <TitleWrapper type={type}>{title}</TitleWrapper>;
};

export default Title;

const TitleWrapper = styled.h1<{ type: string }>`
  font-size: ${(props) => (props.type === 'card' ? '20px' : '30px')};
`;
