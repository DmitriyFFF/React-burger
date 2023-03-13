import { useSelector } from 'react-redux';
import { Navigate, Outlet, } from 'react-router-dom';

export const AuthorizedRouteElement = () => {
  const { isAuthenticated } = useSelector(store => store.authReducer);

  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
