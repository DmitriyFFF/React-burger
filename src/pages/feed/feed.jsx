import React from 'react';
import { useSelector } from 'react-redux';
import { Orders } from '../../components/OrderFeed/Orders/Orders';
import { OrdersStats } from '../../components/OrderFeed/OrdersStats/OrdersStats';
import styles from './feed.module.css';

export const Feed = () => {
  const orders = useSelector(store => store.wsReducer.orders)
  console.log(orders)

  return (
    <main className={styles.content}>
      <Orders />
      <OrdersStats />
    </main>
  );
}
