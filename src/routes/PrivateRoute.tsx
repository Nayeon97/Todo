import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteProps } from '../common/types';
import SnackBar from '../components/atoms/SnackBar';

const PrivateRoute = ({ component }: RouteProps) => {
  const isToken = localStorage.getItem('token');
  if (!isToken) {
    SnackBar('로그인 후 사용해주세요', 'warning');
    return <Navigate to="/signin" />;
  }

  return component;
};

export default PrivateRoute;
