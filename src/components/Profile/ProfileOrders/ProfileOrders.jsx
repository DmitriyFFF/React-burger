import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ingredientType } from '../../../utils/types.ts';
import { Link, useLocation } from 'react-router-dom';
import { OrderItem } from '../../OrderFeed/OrderItem/OrderItem';
import styles from './ProfileOrders.module.css';
import { wsAuthConnectionClosed, wsAuthConnectionSuccess } from '../../../services/actions/wsAuthAction';
import { useDispatch } from 'react-redux';

export const ProfileOrders = ({profileOrders}) => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsAuthConnectionSuccess());
    return () => {
      dispatch(wsAuthConnectionClosed());
    };
  }, [dispatch]);

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
