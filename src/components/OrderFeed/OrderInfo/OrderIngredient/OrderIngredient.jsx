import React, { useMemo } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './OrderIngredient.module.css';
// import { useSelector } from "react-redux";

export const OrderIngredient = ({ingredient}) => {
  // const ingredients = useSelector(store => store.ingredientsReducer.ingredients);

  // const count = useMemo(() => {
  //   return ingredients.filter(item => item._id === ingredient._id).length
  //   },
  //   [ingredients, ingredient]
  // );

  return (
    <li className={styles.ingredient}>
      <img className={styles.image} src={ingredient.image} alt={ingredient.name}/>
      <h4 className="text text_type_main-small ml-4 mr-4 mt-5 mb-5">{ingredient.name}</h4>
      <div className={styles.ingredientPrice}>
        {/* <p className="text text_type_digits-default">{count}</p> */}
        <p className="text text_type_digits-default mr-2">1 x {ingredient.price}</p>
        <CurrencyIcon/>
      </div>
    </li>
  )
}
