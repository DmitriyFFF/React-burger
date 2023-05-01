import React, { FC } from 'react';
import { useSelector } from '../../hooks/hooks';
import { Navigate, Outlet, } from 'react-router-dom';

export const AuthorizedRoute: FC = () => {
  const { isAuthenticated } = useSelector(store => store.authReducer);

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
