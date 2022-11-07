import React from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { BurgerIngredients } from '../BurgerIngredients/BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor/BurgerConstructor';
import appStyles from './App.module.css';
import { data } from '../../utils/data.js';

export const App = () => {

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

