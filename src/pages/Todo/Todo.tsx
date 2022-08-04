import React, { useEffect } from 'react';
import { instance } from '../../api/index';

const Todo = () => {
  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    const res = await instance.get('/todos');
    console.log(res.data);
  };

  return (
    <div>
      <p>Todo App</p>
    </div>
  );
};

export default Todo;
