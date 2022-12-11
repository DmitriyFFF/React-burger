import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ConstructorOrder.module.css';
import { Modal } from '../Modal/Modal';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import { ingredientsId } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { CLEAR_ORDER, postOrder } from '../../services/actions/order';
import { CLOSE_MODAL } from '../../services/actions/modal';

export const ConstructorOrder = ({totalPrice}) => {
  const[isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: CLOSE_MODAL
    });
    dispatch({
      type: CLEAR_ORDER
    });
    setIsOpen(false);
  }

  const handlePostOrder = () => {
    dispatch(postOrder(ingredientsId));
    setIsOpen(true);
  }

  return (
    <div className={`${styles.order} mt-10`}>
      <div className={`${styles.priceContainer} mt-1 mb-1 mr-10`}>
        <p className={`${styles.price} text text_type_digits-medium`}>{totalPrice}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button onClick={handlePostOrder} type="primary" size="large" htmlType="button">
        Оформить заказ
      </Button>
      {isOpen &&
        <Modal onClose={handleClose}>
          <OrderDetails />
        </Modal>}
    </div>
  )
}

ConstructorOrder.propTypes = {
  totalPrice: PropTypes.number.isRequired
};
