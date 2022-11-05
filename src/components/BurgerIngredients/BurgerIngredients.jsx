import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Ingredients from '../Ingredients/Ingredients.jsx';
import styles from './BurgerIngredients.module.css';
//import { data } from '../../utils/data.js'

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
    <section className="content mr-10">
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs />
      <Ingredients data={buns} title={'Булки'} />
      <Ingredients data={sauces} title={'Соусы'} />
      <Ingredients data={mains} title={'Начинки'} />
    </section>
  );
}

export default BurgerIngredients;

{/*const IngredientItem = ({card}) => {
  return (
    <li className={ingredientStyles.card}>
      <Counter count={1} size="default" />
      <img className={ingredientStyles.cardImage} src={card.image} alt={card.name} />
      <div className={ingredientStyles.priceContainer}>
        <p className={ingredientStyles.price}>{card.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={ingredientStyles.cardName}>{card.name}</h3>
    </li>
  );
}*/}

{/*function Ingredients({title, cards, type}) {
  const typeOfCards = data.filter((item) => item.type === type);
  return (
    <div className="margin">
      <h2 className="text text_type_main-medium">{title}</h2>
      <ul className={ingredientStyles.ingredients}>
        {typeOfCards.map((item) => {
          <IngredientItem card={item} key={item._id} />
        })}
      </ul>
    </div>
  );
}*/}

{/*const Ingredients = ({data, title}) => {
  //const typeOfCards = data.filter((item) => item.type === type);
  return (
    <div className="margin">
      <h2 className="text text_type_main-medium">{title}</h2>
      <ul className={ingredientStyles.ingredients}>
        {data.map((item) => {
          <IngredientItem key={item._id} card={item} />
        })}
      </ul>
    </div>
  );
}*/}


