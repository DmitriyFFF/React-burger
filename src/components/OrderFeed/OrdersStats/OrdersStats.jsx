import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { ingredientType } from '../../utils/types.js';
import styles from './OrdersStats.module.css';
// import { Link, useLocation } from 'react-router-dom';

export const OrdersStats = () => {
  // const { orders } = useSelector(store => store.orderReducer);
  const data = useSelector(store => store.wsReducer);
  const { orders, total, totalToday } = data;
  // console.log(data)
  // const location = useLocation();
  return (
    <section className={`${styles.content} mb-10`}>
      <div className={styles.orders}>
        <div className={styles.numberOrders}>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <ul className={styles.ordersList}>
            {orders.map((item, index) => (
              item.status === 'done' && index < 10 ? (
                <li className={`${styles.readyItem} text text_type_digits-default`} key={item._id}>
                  {item.number}
                </li>
              ) : null
            ))}
          </ul>
        </div>
        <div className={styles.numberOrders}>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <ul className={styles.ordersList}>
            {orders.map((item, index) => (
              item.status !== 'done' && index < 10 ? (
                <li className={`${styles.readyItem} text text_type_digits-default`} key={item._id}>
                  {item.number}
                </li>
              ) : null
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.totalOrders}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className={`${styles.total} text text_type_digits-large`}>{total}</p>
      </div>
      <div className={styles.totalOrders}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className={`${styles.total} text text_type_digits-large`}>{totalToday}</p>
      </div>
    </section>
  );
}
