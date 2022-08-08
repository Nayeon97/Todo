// Todo 상세 페이지 양식
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DateText from '../../atoms/DateText';
import Title from '../../atoms/Title';
import Content from '../../atoms/Content';
import { useLocation, useNavigate } from 'react-router-dom';
import { instance } from '../../../api/index';
import Button from '../../atoms/Button';
import { useSetRecoilState } from 'recoil';
import { editState } from '../../../common/atom';

interface TodoTypes {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

const TodoForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const setEditState = useSetRecoilState(editState);
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

  const clickEdit = () => {
    setEditState(true);
  };

  const clickRemove = async () => {
    try {
      await instance.delete(`todos/${state}`);
      navigate('/todolist');
    } catch (err) {
      console.log(err);
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
      <ButtonContainer>
        <div>
          <Button name="수정하기" onClick={clickEdit} btnType="submit" />
        </div>
        <div>
          <Button name="삭제하기" onClick={clickRemove} btnType="delete" />
        </div>
      </ButtonContainer>
    </>
  );
};

export default TodoForm;

const DateWrapper = styled.div`
  margin: 10px 0px;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 220px 100px;
`;
