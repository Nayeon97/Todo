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
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 30px;
  padding: 5px 10px;
  border-bottom: 2px solid #74c0fc;
  margin-bottom: 20px;
  cursor: pointer;
`;
