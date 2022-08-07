// Todo 상세 페이지 양식
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DateText from '../../atoms/DateText';
import Title from '../../atoms/Title';
import Content from '../../atoms/Content';
import { useLocation } from 'react-router-dom';
import { instance } from '../../../api/index';

interface TodoTypes {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const TodoForm = () => {
  const { state } = useLocation();
  const [todo, setTodo] = useState<TodoTypes>({
    title: '',
    content: '',
    id: '',
    createdAt: '',
    updatedAt: '',
  });

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    try {
      const res = await instance.get(`todos/${state}`);
      setTodo(res.data.data);
    } catch (err) {
      console.log('err');
    }
  };

  return (
    <>
      <Title title={todo.title} type={'card'} />
      <DateWrapper>
        <DateText date={todo.updatedAt} />
      </DateWrapper>
      <div>
        <Content text={todo.content} />
      </div>
    </>
  );
};

export default TodoForm;

const DateWrapper = styled.div`
  margin: 10px 0px;
`;
