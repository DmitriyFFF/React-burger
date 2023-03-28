import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { wsAuthConnectionClosed, wsAuthConnectionSuccess } from '../../../services/actions/wsAuthAction';
import { OrderItem } from '../../OrderFeed/OrderItem/OrderItem';
import styles from './ProfileOrders.module.css';

export const ProfileOrders = () => {
  const { ordersAuth } = useSelector(store => store.wsAuthReducer);
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
      {ordersAuth.map(item =>(
        <Link
          className={styles.orderLink}
          key={item._id}
          to={`/profile/orders/${item._id}`}
          state={{background: location}}
        >
          <OrderItem order={item} key={item._id} />
        </Link>
        ))}
      </ul>
    </section>
  );
}
