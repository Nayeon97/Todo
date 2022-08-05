import React from 'react';
import styled from 'styled-components';
import DateText from '../../atoms/DateText';
import Title from '../../atoms/Title';

const TodoCard = () => {
  return (
    <CardWrapper>
      <Title title={'제목'} type={'card'} />
      <DateText date={'2022-02-09'} />
    </CardWrapper>
  );
};

export default TodoCard;

const CardWrapper = styled.div`
  width: 300px;
  height: 50px;
  padding: 10px 20px;
  background-color: #f3f0ff;
  border-radius: 10px;
`;
