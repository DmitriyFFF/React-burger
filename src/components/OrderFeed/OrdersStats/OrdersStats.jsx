import React from 'react';
// import PropTypes from 'prop-types';
// import { ingredientType } from '../../utils/types.js';
import styles from './OrdersStats.module.css';
// import { Link, useLocation } from 'react-router-dom';

export const OrdersStats = () => {
  // const location = useLocation();
  return (
    <section className={`${styles.content} mb-10`}>
      <div className={styles.orders}>
        <div className={styles.numberOrders}>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <ul className={styles.ordersList}>
            <li className={`${styles.readyItem} text text_type_digits-default`}>034533</li>
            <li className={`${styles.readyItem} text text_type_digits-default`}>034533</li>
            <li className={`${styles.readyItem} text text_type_digits-default`}>034533</li>
            <li className={`${styles.readyItem} text text_type_digits-default`}>034533</li>
            <li className={`${styles.readyItem} text text_type_digits-default`}>034533</li>
            <li className={`${styles.readyItem} text text_type_digits-default`}>034533</li>
          </ul>
        </div>
        <div className={styles.numberOrders}>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <ul className={styles.ordersList}>
            <li className={`${styles.inProgressItem} text text_type_digits-default`}>034533</li>
            <li className={`${styles.inProgressItem} text text_type_digits-default`}>034533</li>
            <li className={`${styles.inProgressItem} text text_type_digits-default`}>034533</li>
          </ul>
        </div>
      </div>
      <div className={styles.totalOrders}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className={`${styles.total} text text_type_digits-large`}>28 752</p>
      </div>
      <div className={styles.totalOrders}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className={`${styles.total} text text_type_digits-large`}>138</p>
      </div>
    </section>
  );
}
