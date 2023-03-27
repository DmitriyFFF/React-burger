import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Orders } from '../../components/OrderFeed/Orders/Orders';
import { OrdersStats } from '../../components/OrderFeed/OrdersStats/OrdersStats';
import { wsConnectionSuccess, wsConnectionClosed } from '../../services/actions/wsAction';
import styles from './feed.module.css';

export const Feed = () => {
  // const dispatch = useDispatch();
  // const {orders} = useSelector(store => store.orderReducer);

  // useEffect(() => {
  //   dispatch(wsConnectionSuccess());
  //   return () => {
  //     dispatch(wsConnectionClosed());
  //   };
  // }, [dispatch]);
  // console.log(orders)

  return (
    <main className={styles.content}>
      <Orders />
      <OrdersStats />
    </main>
  );
}
