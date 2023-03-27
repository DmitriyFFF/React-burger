import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { wsAuthConnectionClosed, wsAuthConnectionSuccess } from '../../../services/actions/wsAuthAction';
import { OrderItem } from '../../OrderFeed/OrderItem/OrderItem';
// import PropTypes from 'prop-types';
// import { ingredientType } from '../../utils/types.js';
import styles from './ProfileOrders.module.css';

export const ProfileOrders = () => {
  const { ordersAuth } = useSelector(store => store.wsAuthReducer);
  // console.log(ordersAuth)
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

        {/* <Link
            className={styles.orderLink}
            // key={item._id}
            to={'/profile/orders/:id'}
            // state={{background: location}}
          >
            <OrderItem />
        </Link>  */}
        {/* {orders.map(item =>(
          <Link
            className={styles.orderLink}
            key={item._id}
            to={`/feed/${item._id}`}
            state={{background: location}}
          >
            <OrderItem order={item} key={item._id} />
          </Link>
        ))} */}
      </ul>
    </section>
  );
}
