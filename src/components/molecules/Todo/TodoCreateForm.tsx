import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Textarea from '../../atoms/Textarea';
import TitleInput from '../../atoms/TitleInput';
import { instance } from '../../../api/index';

interface TodoCreateTypes {
  title: string;
  content: string;
}

const TodoCreateForm = () => {
  const [create, setCreate] = useState<TodoCreateTypes>({
    title: '',
    content: '',
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
    try {
      await instance.post('/todos', {
        title: create.title,
        content: create.content,
      });
    } catch (err) {
      console.log('err');
    }
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
        <Button name="저장하기" onClick={onClick} btnType={'submit'} />
      </ButtonWrapper>
    </div>
  );
};

export default TodoCreateForm;

const CreateForm = styled.div`
  display: grid;
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;
  float: right;
`;
