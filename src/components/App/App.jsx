import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import appStyles from './App.module.css';

function App() {
  return (
    <div className={appStyles.App}>
      <AppHeader />
      {/*<main className={appStyles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
  </main>*/}
    </div>
  );
}

export default App;
