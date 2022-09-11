import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteProps } from '../common/types';

const LoginRoute = ({ component }: RouteProps) => {
  const isToken = localStorage.getItem('token');
  if (isToken) {
    return <Navigate to="/todolist" />;
  }

  return component;
};

export default LoginRoute;
