import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DateText from '../../atoms/DateText';
import Title from '../../atoms/Title';

interface TodoListCardProps {
  title: string;
  date: string;
  id: string;
}

const TodoListCard = ({ title, date, id }: TodoListCardProps) => {
  const navigate = useNavigate();

  const onClick = async () => {
    navigate(`/todo/${id}`, { state: id });
  };

  return (
    <CardWrapper onClick={onClick}>
      <Title title={title} type={'card'} />
      <DateText date={date} />
    </CardWrapper>
  );
};

export default TodoListCard;

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
