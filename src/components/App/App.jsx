import {React, useState, useEffect} from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { BurgerIngredients } from '../BurgerIngredients/BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor/BurgerConstructor';
import appStyles from './App.module.css';
import { baseUrl, request } from '../../utils/constants';

export const App = () => {
  const[data, setData] = useState([]);
  useEffect(() => {
    const getData = () => {
      request(`${baseUrl}/ingredients`)
        .then (res => setData(res.data))
        .catch((err) => {
          console.log(err);
        })
    };
    getData();
  }, []);

  return (
    <div className={appStyles.App}>
      <AppHeader />
      <main className={appStyles.content}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </div>
  );
}

