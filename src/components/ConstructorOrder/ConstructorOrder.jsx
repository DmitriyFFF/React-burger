import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ConstructorOrder.module.css';
import { Modal } from '../Modal/Modal';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import { ingredientsId } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAR_ORDER, postOrder } from '../../services/actions/order';
import { CLOSE_MODAL } from '../../services/actions/modal';
import { CLEAR_INGREDIENTS } from '../../services/actions/constructor';
import { useNavigate } from 'react-router-dom';

export const ConstructorOrder = ({totalPrice}) => {
  const[isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(store => store.authReducer);
  const { bun, ingredients } = useSelector(state => state.constructorReducer);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: CLOSE_MODAL
    });
    dispatch({
      type: CLEAR_ORDER
    });
    setIsOpen(false);
    dispatch({
      type: CLEAR_INGREDIENTS
    });
  }

  const handlePostOrder = () => {
    if (isAuthenticated) {
      dispatch(postOrder(ingredientsId));
      setIsOpen(true);
    } else {
      navigate({pathname:'/login'})
    }
  }

  return (
    <div className={`${styles.order} mt-10`}>
      <div className={`${styles.priceContainer} mt-1 mb-1 mr-10`}>
        <p className={`${styles.price} text text_type_digits-medium`}>{totalPrice}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        onClick={handlePostOrder}
        type="primary"
        size="large"
        htmlType="button"
        disabled={!bun || !ingredients.length ? true : false}
      >
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
