import React, {useEffect} from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import { AppHeader } from '../AppHeader/AppHeader';
import styles from './App.module.css';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { Login, Register, Main, ForgotPassword, ResetPassword, Profile, NotFound404, Ingredient, Feed, Order } from '../../pages';
import { getUserData } from '../../services/actions/auth';
import { ProtectedRouteElement } from '../ProtectedRoute/ProtectedRoute';
import { AuthorizedRouteElement } from '../AuthorizedRoute/AuthorizedRoute';
import { Modal } from '../Modal/Modal.jsx';
import { IngredientDetails } from '../IngredientDetails/IngredientDetails.jsx';
import { closeModal } from '../../services/actions/modal';

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state && location.state.background;

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUserData());
  }, [dispatch]);


  const handleClose = () => {
    dispatch(closeModal());
    navigate(-1);
  };

  return (
    <div className={styles.App}>
      <AppHeader />
        <Routes location={state || location}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AuthorizedRouteElement />}>
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/" element={<ProtectedRouteElement />}>
            <Route path="/profile/*" element={<Profile />} />
            {/* <Route path="/profile/orders" element={<Profile />} /> */}
          </Route>
          <Route path="/ingredients/:id" element={<Ingredient />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/feed/:id" element={<Order />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        { state &&
          <Routes>
            <Route path="/ingredients/:id" element={
              <Modal
                onClose={handleClose}
                title="Детали ингредиента">
                  <IngredientDetails />
              </Modal>
              }
            />
          </Routes>
        }
    </div>
  );
}

