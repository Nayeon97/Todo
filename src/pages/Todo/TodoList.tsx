import React, { useEffect } from 'react';
import { instance } from '../../api/index';
import TodoCard from '../../components/molecules/Todo/TodoCard';
const TodoList = () => {
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    const res = await instance.get('/todos');
    console.log(res.data);
  };

  return (
    <div>
      <TodoCard />
    </div>
  );
};

export default TodoList;
