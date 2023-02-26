import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const AuthorizedRouteElement = () => {
  // const location = useLocation();
  const { isAuthenticated } = useSelector(store => store.authReducer);

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  // return !isAuthenticated ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
}
