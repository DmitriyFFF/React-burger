import React from 'react';
//import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './OrderDetails.module.css';

export const OrderDetails = () => {
  return (
    <section className={`${styles.order} pt-4 pb-30`}>
      <h2 className="text text_type_digits-large mb-8">111122</h2>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <div className={`${styles.image} mt-15 mb-15`}>
        {/*<CheckMarkIcon className="mt-15 mb-15" type="secondary" />*/}
      </div>
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </section>
  )
}
