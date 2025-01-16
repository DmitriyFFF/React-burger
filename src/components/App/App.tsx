import React, { useEffect, FC } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AppHeader } from '../AppHeader/AppHeader';
import styles from './App.module.css';
import { useDispatch } from '../../hooks/hooks';
import { getIngredients } from '../../services/actions/ingredients';
import { Login, Register, Main, ForgotPassword, ResetPassword, Profile, NotFound404, Ingredient, Feed } from '../../pages';
import { getUserData } from '../../services/actions/auth';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { AuthorizedRoute } from '../AuthorizedRoute/AuthorizedRoute';
import { Modal } from '../Modal/Modal';
import { IngredientDetails } from '../IngredientDetails/IngredientDetails';
import { closeModal } from '../../services/actions/modal';
import { OrderInfo } from '../OrderFeed/OrderInfo/OrderInfo';
import { Order } from '../../pages/order/order';

export const App: FC = () => {
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
        <Route path="/React-burger" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<AuthorizedRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/profile/*" element={<Profile />} />
        </Route>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/profile/orders/:id" element={<Order />} />
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
          <Route path="/feed/:id" element={
            <Modal onClose={handleClose}>
              <OrderInfo modalIsOpen={true}/>
            </Modal>
            }
          />
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/profile/orders/:id" element={
              <Modal onClose={handleClose}>
                <OrderInfo modalIsOpen={true}/>
              </Modal>
            }
          />
          </Route>
        </Routes>
      }
    </div>
  );
}

