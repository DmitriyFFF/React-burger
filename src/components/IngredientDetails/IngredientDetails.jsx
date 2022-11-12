import React from 'react';
import styles from './IngredientDetails.module.css';

export const IngredientDetails = (props) => {
  return (
    <section className={styles.content}>
      <img className={styles.image} src={props.image} alt={props.name} />
      <h2 className={`${styles.title} text text_type_main-medium mt-4`}>{props.name}</h2>
      <ul className={`${styles.container} mt-8 mb-15`}>
        <li className={styles.detailItem}>
          <h3 className="text text_type_main-default">Калории,ккал</h3>
          <p className="text text_type_digits-default mt-2">{props.calories}</p>
        </li>
        <li className={styles.detailItem}>
          <h3 className="text text_type_main-default">Белки, г</h3>
          <p className="text text_type_digits-default mt-2">{props.proteins}</p>
        </li>
        <li className={styles.detailItem}>
          <h3 className="text text_type_main-default">Жиры, г</h3>
          <p className="text text_type_digits-default mt-2">{props.fat}</p>
        </li>
        <li className={styles.detailItem}>
          <h3 className="text text_type_main-default">Углеводы, г</h3>
          <p className="text text_type_digits-default mt-2">{props.carbohydrates}</p>
        </li>
      </ul>
    </section>
  )
};
