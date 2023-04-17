import React from 'react';
import PropTypes from 'prop-types';
import { ingredientType } from '../../../utils/types.ts';
import { Link, useLocation } from 'react-router-dom';
import { OrderItem } from '../OrderItem/OrderItem.jsx';
import styles from './Orders.module.css';

export const Orders = ({feedOrders}) => {
  const location = useLocation();

  return (
    <section className={`${styles.content} mb-10`}>
      <h2 className="text text_type_main-medium mt-10 mb-5">Лента заказов</h2>
      <ul className={styles.orderList}>
      {feedOrders?.map(item =>(
          <Link
            className={styles.orderLink}
            key={item._id}
            to={{pathname: `/feed/${item._id}`}}
            state={{background: location}}
          >
            <OrderItem order={item} key={item._id} />
          </Link>
        ))}
      </ul>
    </section>
  );
}

Orders.propTypes = {
  feedOrders: PropTypes.arrayOf(ingredientType)
};
