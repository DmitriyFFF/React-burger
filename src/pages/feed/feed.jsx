import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Orders } from '../../components/OrderFeed/Orders/Orders';
import { OrdersStats } from '../../components/OrderFeed/OrdersStats/OrdersStats';
import { wsConnectionClosed, wsConnectionSuccess } from '../../services/actions/wsAction';
import styles from './feed.module.css';

export const Feed = () => {
  const { orders } = useSelector(store => store.wsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionSuccess());
    return () => {
      dispatch(wsConnectionClosed());
    };
  }, [dispatch]);

  return (
    <main className={styles.content}>
      <Orders feedOrders={orders}/>
      <OrdersStats />
    </main>
  );
}
