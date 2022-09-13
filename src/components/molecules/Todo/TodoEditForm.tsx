import React, { useState } from 'react';
import styled from 'styled-components';
import TitleInput from '../../atoms/TitleInput';
import Textarea from '../../atoms/Textarea';
import Button from '../../atoms/Button';

import { useLocation } from 'react-router-dom';
import { TodoId, TodoProps } from '../../../common/types';

import useUpdateTodo from '../../../hooks/useUpdateTodo';

interface TodoCreateTypes {
  title: string;
  content: string;
}

const TodoEditForm = ({ todo }: TodoProps) => {
  const location = useLocation();
  const state = location.state as TodoId;
  const updateTodo = useUpdateTodo(state);

  const [create, setCreate] = useState<TodoCreateTypes>({
    title: todo.title,
    content: todo.content,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreate({
      ...create,
      [name]: value,
    });
  };

  const onContextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCreate({
      ...create,
      [name]: value,
    });
  };

  const onClick = async () => {
    updateTodo.mutate(create);
  };

  return (
    <div>
      <CreateForm>
        <TitleInput
          type="text"
          name="title"
          value={create.title}
          onChange={onChange}
          placeholder="제목을 입력해주세요."
        />
        <Textarea
          name="content"
          value={create.content}
          onChange={onContextChange}
          placeholder="내용을 입력해주세요."
        />
      </CreateForm>
      <ButtonWrapper>
        <Button name="수정완료" onClick={onClick} btnType={'submit'} />
      </ButtonWrapper>
    </div>
  );
};

export default TodoEditForm;

const CreateForm = styled.div`
  display: grid;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
  float: right;
`;
