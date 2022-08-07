import React from 'react';
import styled from 'styled-components';

const DateText = ({ date }: { date: string }) => {
  return <DateWrapper>{date.slice(0, 10)}</DateWrapper>;
};

export default DateText;

const DateWrapper = styled.p`
  font-size: 15px;
  color: gray;
`;
