import React, {useEffect} from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import { AppHeader } from '../AppHeader/AppHeader';
import styles from './App.module.css';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { Login, Register, Main, ForgotPassword, ResetPassword, Profile, NotFound404, Ingredient, Feed } from '../../pages';
import { getUserData } from '../../services/actions/auth';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { AuthorizedRoute } from '../AuthorizedRoute/AuthorizedRoute';
import { Modal } from '../Modal/Modal.jsx';
import { IngredientDetails } from '../IngredientDetails/IngredientDetails.jsx';
import { closeModal } from '../../services/actions/modal';
import { OrderInfo } from '../OrderFeed/OrderInfo/OrderInfo';
import { Order } from '../../pages/order/order';
import { wsConnectionClosed, wsConnectionSuccess } from '../../services/actions/wsAction';
import { wsAuthConnectionClosed, wsAuthConnectionSuccess } from '../../services/actions/wsAuthAction';

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

  useEffect(() => {
    dispatch(wsConnectionSuccess());
    dispatch(wsAuthConnectionSuccess());
    return () => {
      dispatch(wsConnectionClosed());
      dispatch(wsAuthConnectionClosed());
    };
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <AppHeader />
      <Routes location={state || location}>
        <Route path="/" element={<Main />} />
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
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/login" element={<ProtectedRoute element={<Login />}/>} />
        {/* <Route path="/register" element={<ProtectedRoute element={<Register />}/>} />
        <Route path="/forgot-password" element={<ProtectedRoute element={<ForgotPassword />}/>} />
        <Route path="/reset-password" element={<ProtectedRoute element={<ResetPassword />}/>} />
        <Route path="/profile/*" element={<ProtectedRoute element={<Profile />}/>} />
        <Route path="/profile/orders/:id" element={<ProtectedRoute element={<OrderInfo />}/>} />
        <Route path="/ingredients/:id" element={<AuthorizedRoute element={<Ingredient />}/>} />
        <Route path="/feed" element={<AuthorizedRoute element={<Feed />}/>} />
        <Route path="/feed/:id" element={<AuthorizedRoute element={<OrderInfo />}/>} />  */}
        {/* <Route path="*" element={<ProtectedRoute element={<NotFound404 />}/>} /> */}
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
            } />
          </Route>
          {/* <Route path="/profile/orders/:id" element={
            <Modal onClose={handleClose}>
              <OrderInfo />
            </Modal>
            }
          /> */}
        </Routes>
      }
    </div>
  );
}

