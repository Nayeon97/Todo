import React from 'react';
import './App.css';
import SignUp from './pages/User/SignUp';
import styled from 'styled-components';

const App = () => {
  return (
    <AppContainer>
      <SignUp />
    </AppContainer>
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
