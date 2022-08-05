// Todo 상세 페이지 양식
import React from 'react';
import DateText from '../../atoms/DateText';
import Title from '../../atoms/Title';
import Context from '../../atoms/Context';

const TodoForm = () => {
  return (
    <>
      <Title title={'제목'} type={'card'} />
      <DateText date={'2022-02-09'} />
      <Context text={'투두리스트 '} />
    </>
  );
};

export default TodoForm;
