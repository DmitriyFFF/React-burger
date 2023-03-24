import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { OrderItem } from '../OrderItem/OrderItem.jsx';
// import PropTypes from 'prop-types';
// import { ingredientType } from '../../utils/types.js';
import styles from './Orders.module.css';

export const Orders = () => {
  const {orders} = useSelector(store => store.orderReducer);
  // console.log(orders)
  const location = useLocation();
  return (
    <section className={`${styles.content} mb-10`}>
      <h2 className="text text_type_main-medium mt-10 mb-5">Лента заказов</h2>
      <ul className={styles.orderList}>
      {orders.map(item =>(
          <Link
            className={styles.orderLink}
            key={item._id}
            to={`/feed/${item._id}`}
            state={{background: location}}
          >
            <OrderItem order={item} key={item._id} />
          </Link>
        ))}
        {/* <Link
            className={styles.orderLink}
            // key={item._id}
            to={'/feed/:id'}
            state={{background: location}}
          >
            <OrderItem />
        </Link> */}
        {/* <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem /> */}

      </ul>
    </section>
  );
}
