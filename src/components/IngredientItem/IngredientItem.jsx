import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd/dist/hooks/index.js';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types.js';
import { Modal } from '../Modal/Modal.jsx';
import { IngredientDetails } from '../IngredientDetails/IngredientDetails.jsx';
import { OPEN_MODAL, CLOSE_MODAL } from '../../services/actions/modal.js';
import styles from './IngredientItem.module.css';

export const IngredientItem = ({card}) => {
  const { bun, ingredients }  = useSelector(state => state.constructorReducer);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const count = useMemo(() => {
    if (card.type === 'bun') {
      return bun && bun._id === card._id ? 2 : 0;
    } else {
      return ingredients.filter(ingredient => ingredient._id === card._id).length
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
    dispatch({
      type: OPEN_MODAL
    });
    setIsOpen(true);
  };

  const handleClose = () => {
    dispatch({
      type: CLOSE_MODAL
    });
    setIsOpen(false);
  }

  return (
    <>
      <li
        className={styles.card}
        onClick={handleOpen}
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
      {isOpen &&
        <Modal
          onClose={handleClose}
          title="???????????? ??????????????????????">
            <IngredientDetails {...card} />
        </Modal>}
    </>
  );
}

IngredientItem.propTypes = {
  card: ingredientType.isRequired
};

