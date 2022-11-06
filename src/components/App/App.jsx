import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import appStyles from './App.module.css';
import { data } from '../../utils/data.js';

const App = () => {

  return (
    <div className={appStyles.App}>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
