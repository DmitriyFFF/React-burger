import React from 'react';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientStyles from './BurgerIngredients.module.css';
import { data } from '../../utils/data.js'

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

function IngredientItem(card) {
  return (
    <li className={ingredientStyles.card}>
      <Counter count={1} size="small" />
      <img className={ingredientStyles.cardImage} src={card.image} alt={card.name} />
      <div className={ingredientStyles.priceContainer}>
        <p className={ingredientStyles.price}>{card.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={ingredientStyles.cardName}>{card.name}</h3>
    </li>
  );
}

function Ingredients(title, cards) {
  //const cards=[];
  return (
    <div>
      <h2 className="text text_type_main-medium">{title}</h2>
      <ul className={ingredientStyles.ingredients}>
        {cards.map((card) => {
          <IngredientItem card={card} key={card.id} />
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
      {/*<Ingredients title="Булки" cards={data}/>
      <Ingredients title="Соусы" cards={data}/>
  <Ingredients title="Начинки" cards={data}/>*/}
    </section>
  );
}

export default BurgerIngredients;
