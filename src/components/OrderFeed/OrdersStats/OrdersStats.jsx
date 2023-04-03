import React from 'react';
import { useSelector } from 'react-redux';
import styles from './OrdersStats.module.css';

export const OrdersStats = () => {
  const data = useSelector(store => store.wsReducer);
  const { orders, total, totalToday } = data;

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
