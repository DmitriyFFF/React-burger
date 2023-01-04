import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AppHeader } from '../AppHeader/AppHeader';
import { Main } from '../../pages/main/main';
import styles from './App.module.css';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { Login } from '../../pages/login/login';
import { Register } from '../../pages/register/register';

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div className={styles.App}>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/" exact={true}>
            <Main />
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/register" exact={true}>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

