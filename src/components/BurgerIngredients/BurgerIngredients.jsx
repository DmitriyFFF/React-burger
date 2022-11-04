import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientStyles from './BurgerIngredients.module.css';

function Tabs() {
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

function Ingredients(title, type) {
  return (
    <div>
      <h2 className="text text_type_main-medium">{title}</h2>
      <ul className="">
        {type.map((item) => {

        })}
      </ul>
    </div>
  );
}

function BurgerIngredients() {
  return (
    <section>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <Tabs />
    </section>
  );
}

export default BurgerIngredients;
