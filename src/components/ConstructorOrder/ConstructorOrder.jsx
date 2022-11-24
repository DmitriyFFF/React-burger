import React, {useState} from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ConstructorOrder.module.css';
import { Modal } from '../Modal/Modal';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import { request, baseUrl, ingredientsId } from '../../utils/constants';

export const ConstructorOrder = () => {
  //const [order, setOrder] = React.useState(null);

  const[isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
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
      //.then (res => postData(res.order.number))
      .catch((err) => {
        console.log(err);
      })
  };
  postData();

  return (
    <div className={`${styles.order} mt-10`}>
      <div className={`${styles.priceContainer} mt-1 mb-1 mr-10`}>
        <p className={`${styles.price} text text_type_digits-medium`}>100500</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button onClick={handleOpen} type="primary" size="large" htmlType="button">
        Оформить заказ
      </Button>
      {isOpen &&
        <Modal onClose={handleClose}>
          <OrderDetails />
        </Modal>}
    </div>
  )
}
