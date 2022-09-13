// Todo 상세 페이지 양식
import React from 'react';
import styled from 'styled-components';
import DateText from '../../atoms/DateText';
import Title from '../../atoms/Title';
import Content from '../../atoms/Content';
import { useLocation } from 'react-router-dom';
import Button from '../../atoms/Button';
import { useSetRecoilState } from 'recoil';
import { editState } from '../../../common/atom';
import useDeleteTodo from '../../../hooks/useDeleteTodo';
import { TodoId, TodoProps } from '../../../common/types';

const TodoForm = ({ todo }: TodoProps) => {
  const location = useLocation();
  const state = location.state as TodoId;
  const deleteTodo = useDeleteTodo();
  const setEditState = useSetRecoilState(editState);

  const clickEdit = () => {
    setEditState(true);
  };

  const confirmAction = () => {
    if (window.confirm('해당 Todo 는 삭제됩니다.')) {
      removeAction();
    }
  };

  const removeAction = async () => {
    deleteTodo.mutate(state);
  };

  return (
    <>
      <Title title={todo?.title} type={'card'} />
      <DateWrapper>
        <DateText date={todo?.updatedAt} />
      </DateWrapper>
      <div>
        <Content text={todo?.content} />
      </div>
      <ButtonContainer>
        <div>
          <Button name="수정하기" onClick={clickEdit} btnType="submit" />
        </div>
        <div>
          <Button name="삭제하기" onClick={confirmAction} btnType="delete" />
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
