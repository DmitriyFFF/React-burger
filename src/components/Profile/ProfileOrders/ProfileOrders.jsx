import React from 'react';
import PropTypes from 'prop-types';
import { ingredientType } from '../../../utils/types.js';
import { Link, useLocation } from 'react-router-dom';
import { OrderItem } from '../../OrderFeed/OrderItem/OrderItem';
import styles from './ProfileOrders.module.css';

export const ProfileOrders = ({profileOrders}) => {
  const location = useLocation();

  return (
    <section className={`${styles.content} mb-10`}>
      <ul className={styles.orderList}>
      {profileOrders?.map(item =>(
        <Link
          className={styles.orderLink}
          key={item._id}
          to={{pathname: `/profile/orders/${item._id}`}}
          state={{background: location}}
        >
          <OrderItem order={item} key={item._id} />
        </Link>
        ))}
      </ul>
    </section>
  );
}

ProfileOrders.propTypes = {
  profileOrders: PropTypes.arrayOf(ingredientType)
};
