import {React, useState} from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types.js';
import { Modal } from '../Modal/Modal.jsx';
import { IngredientDetails } from '../IngredientDetails/IngredientDetails.jsx';
import styles from './IngredientItem.module.css';

export const IngredientItem = ({card}) => {
  const[isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <>
      <li className={styles.card} onClick={handleOpen}>
        <Counter count={1} size="default" />
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
          title="Детали ингредиента">
            <IngredientDetails {...card} />
        </Modal>}
    </>
  );
}

IngredientItem.propTypes = {
  card: ingredientType.isRequired
};

