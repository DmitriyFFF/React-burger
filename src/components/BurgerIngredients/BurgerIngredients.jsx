import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredients from '../Ingredients/Ingredients.jsx';
import styles from './BurgerIngredients.module.css';

const Tabs = () => {
  const [current, setCurrent] = React.useState('Булки')
  return (
    <div style={{ display: 'flex' }}>
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

const BurgerIngredients = ({data}) => {

  const buns = data.filter(item => item.type === 'bun');
  const sauces = data.filter(item => item.type === 'sauce');
  const mains = data.filter(item => item.type === 'main');

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

export default BurgerIngredients;
