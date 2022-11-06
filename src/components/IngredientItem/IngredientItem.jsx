import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './IngredientItem.module.css';

const IngredientItem = ({card}) => {
  return (
    <li className={styles.card}>
      <Counter count={1} size="default" />
      <img className={styles.cardImage} src={card.image} alt={card.name} />
      <div className={`${styles.priceContainer} mt-1 mb-1`}>
        <p className={`${styles.price} text text_type_digits-default`}>{card.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.cardName} text text_type_main-default`}>{card.name}</p>
    </li>
  );
}

export default IngredientItem;


