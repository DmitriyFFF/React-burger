import React from 'react';
import IngredientItem from '../IngredientItem/IngredientItem.jsx';
import styles from './Ingredients.module.css';

const Ingredients = ({data, title}) => {
  return (
    <div className="mb-10">
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={styles.ingredients}>
        {data.map(item =>
          <IngredientItem card={item} key={item._id} />
        )}
      </ul>
    </div>
  );
}

export default Ingredients;
