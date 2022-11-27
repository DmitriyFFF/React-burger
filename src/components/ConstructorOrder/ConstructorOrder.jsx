import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ConstructorOrder.module.css';
import { Modal } from '../Modal/Modal';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import { request, baseUrl, ingredientsId } from '../../utils/constants';

export const ConstructorOrder = ({totalPrice}) => {
  const [order, setOrder] = useState(0);
  const[isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const postData = () => {
    request(`${baseUrl}/orders`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        ingredients: ingredientsId
       }),
    })
      .then (res => setOrder(res.order.number))
      .catch((err) => {
        console.log(err);
      });
    setIsOpen(true);
  };

  return (
    <div className={`${styles.order} mt-10`}>
      <div className={`${styles.priceContainer} mt-1 mb-1 mr-10`}>
        <p className={`${styles.price} text text_type_digits-medium`}>{totalPrice}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button onClick={postData} type="primary" size="large" htmlType="button">
        Оформить заказ
      </Button>
      {isOpen &&
        <Modal onClose={handleClose}>
          <OrderDetails orderNumber={order} />
        </Modal>}
    </div>
  )
}

ConstructorOrder.propTypes = {
  totalPrice: PropTypes.number.isRequired
};
