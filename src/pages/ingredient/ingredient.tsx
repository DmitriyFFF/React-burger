import React, { FC } from "react";
import { IngredientDetails } from "../../components/IngredientDetails/IngredientDetails";
import styles from "./ingredient.module.css";

export const Ingredient: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} text text_type_main-large`}>Детали ингредиента</h2>
      <IngredientDetails />
    </div>
  )
}
