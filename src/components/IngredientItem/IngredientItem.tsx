import React, { FC, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd/dist/hooks/index.js';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import { ingredientType } from '../../utils/types.js';
import { TIngredient, TIngredientProps } from '../../utils/types.js';
import {  loadIngredient } from '../../services/actions/modal';
import styles from './IngredientItem.module.css';

export const IngredientItem: FC<TIngredientProps> = ({card}) => {
  const { bun, ingredients }  = useSelector(state => state.constructorReducer);
  const dispatch = useDispatch();

  const count = useMemo(() => {
    if (card.type === 'bun') {
      return bun && bun._id === card._id ? 2 : 0;
    } else {
      return ingredients.filter((ingredient: TIngredient) => ingredient._id === card._id).length
    }},
    [bun, ingredients, card]
  );

  const[{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: card,
    collect: monitor => ({
      opacity: monitor.isDragging() ? .5 : 1
    })
  });

  const handleOpen = () => {
    dispatch(loadIngredient(card));
  };

  return (
    <>
      <li
        className={styles.card}
        onClick={() => handleOpen()}
        ref={dragRef}
        style={{ opacity }}
      >
        {count > 0 &&
          <Counter count={count} size="default" />
        }
        <img className={styles.cardImage} src={card.image} alt={card.name} />
        <div className={`${styles.priceContainer} mt-1 mb-1`}>
          <p className={`${styles.price} text text_type_digits-default`}>{card.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.cardName} text text_type_main-default`}>{card.name}</p>
      </li>
    </>
  );
}

// IngredientItem.propTypes = {
//   card: ingredientType.isRequired
// };

