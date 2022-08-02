import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './pages/User/SignUp';

function App() {
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
