import React, { useEffect, FC } from 'react';
import { TOrder, TOrders } from '../../../utils/types.js';
import { Link, useLocation } from 'react-router-dom';
import { OrderItem } from '../../OrderFeed/OrderItem/OrderItem';
import styles from './ProfileOrders.module.css';
import { wsAuthConnectionClosed, wsAuthConnectionSuccess } from '../../../services/actions/wsAuthAction';
import { useDispatch } from 'react-redux';

export const ProfileOrders: FC<TOrders> = ({profileOrders}) => {
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
      {profileOrders?.map((item: TOrder) =>(
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
