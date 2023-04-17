import React from "react";
import { ingredientType } from '../../../../utils/types.ts';
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './OrderIngredient.module.css';

export const OrderIngredient = ({ingredient, order}) => {
  const count = order.ingredients.filter((item) => item === ingredient._id).length;

  return (
    <li className={styles.ingredient}>
      <img className={styles.image} src={ingredient.image} alt={ingredient.name}/>
      <h4 className="text text_type_main-small ml-4 mr-4 mt-5 mb-5">{ingredient.name}</h4>
      <div className={styles.ingredientPrice}>
        <p className="text text_type_digits-default">{`${count} x ${ingredient.price}`}</p>
        <CurrencyIcon/>
      </div>
    </li>
  )
}

OrderIngredient.propTypes = {
  ingredient: ingredientType,
  order: ingredientType
};
