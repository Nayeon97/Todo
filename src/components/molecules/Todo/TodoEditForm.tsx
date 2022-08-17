import React, { useState, useEffect, SetStateAction } from 'react';
import styled from 'styled-components';
import TitleInput from '../../atoms/TitleInput';
import Textarea from '../../atoms/Textarea';
import Button from '../../atoms/Button';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { instance } from '../../../api/index';
import { useSetRecoilState } from 'recoil';
import { editState } from '../../../common/atom';
import SnackBar from '../../atoms/SnackBar';

interface TodoCreateTypes {
  title: string;
  content: string;
  id: string;
}

const TodoEditForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const setEditState = useSetRecoilState(editState);
  const [create, setCreate] = useState<TodoCreateTypes>({
    title: '',
    content: '',
    id: '',
  });

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    try {
      const res = await instance.get(`todos/${state}`);
      setCreate(res.data.data);
    } catch (err) {
      console.log('err');
    }
  };

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
      await instance.put(`/todos/${create.id}`, {
        title: create.title,
        content: create.content,
      });
      setEditState(false);
      navigate('/todolist');
    } catch (err) {
      if (err instanceof Error) {
        SnackBar('error', err.message);
      }
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
