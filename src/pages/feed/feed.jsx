import React from 'react';
import { Orders } from '../../components/OrderFeed/Orders/Orders';
import { OrdersStats } from '../../components/OrderFeed/OrdersStats/OrdersStats';
import styles from './feed.module.css';

export const Feed = () => {

  return (
    <main className={styles.content}>
      <Orders />
      <OrdersStats />
    </main>

  );
}
