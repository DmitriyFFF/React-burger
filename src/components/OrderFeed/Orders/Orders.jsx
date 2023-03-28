import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { wsConnectionClosed, wsConnectionSuccess } from '../../../services/actions/wsAction.js';
import { OrderItem } from '../OrderItem/OrderItem.jsx';
import styles from './Orders.module.css';

export const Orders = () => {
  const { orders } = useSelector(store => store.wsReducer);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(wsConnectionSuccess());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

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
      </ul>
    </section>
  );
}
