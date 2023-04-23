import React, { FC } from 'react';
// import PropTypes from 'prop-types';
import { IngredientItem } from '../IngredientItem/IngredientItem';
import { TIngredientsProps } from '../../utils/types';
import styles from './Ingredients.module.css';
import { Link, useLocation } from 'react-router-dom';

export const Ingredients: FC<TIngredientsProps> = ({data, title}) => {
  const location = useLocation();
  // console.log(data)
  return (
    <div className="mb-10">
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={styles.ingredients}>
        {data.map(item =>(
          <Link
            className={styles.ingredientLink}
            key={item._id}
            to={`/ingredients/${item._id}`}
            state={{background: location}}
          >
            <IngredientItem card={item} key={item._id} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

// Ingredients.propTypes = {
//   data: PropTypes.arrayOf(ingredientType).isRequired,
//   title: PropTypes.string
// };

