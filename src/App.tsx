import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import SignUp from './pages/User/SignUp';
import SignIn from './pages/User/SignIn';
import styled from 'styled-components';
import Main from './pages/Main/Main';
import TodoList from './pages/Todo/TodoList';
import Todo from './pages/Todo/Todo';
import TodoCreate from './pages/Todo/TodoCreate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/todo/:todoId" element={<Todo />} />
            <Route path="/todocreate" element={<TodoCreate />} />
          </Routes>
        </Router>
        <ToastContainer
          style={{ fontSize: '15px', marginTop: '30px' }}
          position="top-center"
          autoClose={1200}
          closeOnClick={true}
        />
      </AppContainer>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;

const AppContainer = styled.div`
  width: 512px;
  height: 700px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  margin: 0 auto;
  margin-top: 50px;
`;
