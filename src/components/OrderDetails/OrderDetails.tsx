import React, { FC } from 'react';
import { useSelector } from '../../hooks/hooks';
import styles from './OrderDetails.module.css';

export const OrderDetails: FC = () => {
  const { orderNumber, orderRequest, orderFailed } = useSelector(store => store.orderReducer)

  return (
    <section className={`${styles.order} pt-4 pb-30`}>
      {orderRequest && 'Загрузка заказа...'}
      {orderFailed && 'Произошел сбой!'}
      {!orderRequest &&
        <>
          <h2 className="text text_type_digits-large mb-8">{orderNumber}</h2>
          <p className="text text_type_main-medium">идентификатор заказа</p>
          <div className={`${styles.image} mt-15 mb-15`}></div>
          <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
          <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
        </>
      }
    </section>
  )
}
