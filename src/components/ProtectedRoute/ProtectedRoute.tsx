import React, { FC } from 'react';
import { useSelector } from '../../hooks/hooks';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute: FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useSelector(store => store.authReducer);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
}

