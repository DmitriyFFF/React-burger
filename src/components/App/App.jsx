import React, { useState, useEffect } from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import { BurgerIngredients } from '../BurgerIngredients/BurgerIngredients';
import { BurgerConstructor } from '../BurgerConstructor/BurgerConstructor';
import appStyles from './App.module.css';
// import { baseUrl, request } from '../../utils/constants';
// import { DataContext } from '../../services/AppContext';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';

export const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  //const[data, setData] = useState([]);

  // useEffect(() => {
  //   const getData = () => {
  //     request(`${baseUrl}/ingredients`)
  //       .then (res => setData(res.data))
  //       .catch(err => console.log(err))
  //   };
  //   getData();
  // }, []);

  return (
    <div className={appStyles.App}>
      <AppHeader />
      <main className={appStyles.content}>
        <BurgerIngredients />
        <BurgerConstructor />
        {/* <DataContext.Provider value={{data, setData}}>

        </DataContext.Provider> */}
      </main>
    </div>
  );
}

