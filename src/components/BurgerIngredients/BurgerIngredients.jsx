import React, { useState, useContext, useMemo } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredients } from '../Ingredients/Ingredients.jsx';
import styles from './BurgerIngredients.module.css';
import { DataContext } from '../../services/AppContext.js';

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
  const {data} = useContext(DataContext);

  const buns = useMemo(() => data.filter(item => item.type === 'bun'), [data]);
  const sauces = useMemo(() => data.filter(item => item.type === 'sauce'), [data]) ;
  const mains = useMemo(() => data.filter(item => item.type === 'main'), [data]) ;

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

