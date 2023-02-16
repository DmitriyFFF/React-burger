import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AppHeader } from '../AppHeader/AppHeader';
import styles from './App.module.css';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { Login, Register, Main, ForgotPassword, ResetPassword, Profile, NotFound404 } from '../../pages';

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile1" element={<Profile />} />{/*Для теста, удалить позже */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </div>
  );
}

