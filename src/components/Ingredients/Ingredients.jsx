import React from 'react';
import PropTypes from 'prop-types';
import { IngredientItem } from '../IngredientItem/IngredientItem.jsx';
import { ingredientType } from '../../utils/types.js';
import styles from './Ingredients.module.css';

export const Ingredients = ({data, title}) => {
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

Ingredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired,
  title: PropTypes.string
};


