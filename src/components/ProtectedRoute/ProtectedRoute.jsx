import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const ProtectedRoute = () => {
  const location = useLocation();
  const { isAuthenticated } = useSelector(store => store.authReducer);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
}

