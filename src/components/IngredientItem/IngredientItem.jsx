import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './IngredientItem.module.css';


const IngredientItem = ({card}) => {
  return (
    <li className={styles.card}>
      <Counter count={1} size="default" />
      <img className={styles.cardImage} src={card.image} alt={card.name} />
      <div className={`${styles.priceContainer} mt-1 mb-1`}>
        <p className={styles.price}>{card.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={styles.cardName}>{card.name}</h3>
    </li>
  );
}

export default IngredientItem;
