import React, { useState, useContext, useMemo } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredients } from '../Ingredients/Ingredients.jsx';
import styles from './BurgerIngredients.module.css';
//import { DataContext } from '../../services/AppContext.js';
import { useSelector } from 'react-redux';

const Tabs = () => {
  const [current, setCurrent] = useState('Булки')
  return (
    <div className={styles.tabs}>
      <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}

export const BurgerIngredients = () => {
  const ingredients = useSelector(state => state.ingredientsReducer.ingredients)
  // console.log(data)

  //const {data} = useContext(DataContext);

  const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients]);
  const sauces = useMemo(() => ingredients.filter(item => item.type === 'sauce'), [ingredients]) ;
  const mains = useMemo(() => ingredients.filter(item => item.type === 'main'), [ingredients]) ;

  return (
    <section className={`${styles.content} mr-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs />
      <div className={`${styles.menu} mt-10`}>
        <Ingredients data={buns} title={'Булки'} />
        <Ingredients data={sauces} title={'Соусы'} />
        <Ingredients data={mains} title={'Начинки'} />
      </div>
    </section>
  );
}

