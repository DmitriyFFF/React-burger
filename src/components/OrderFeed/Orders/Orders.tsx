import React, { FC } from 'react';
// import PropTypes from 'prop-types';
import { TOrder, TOrders } from '../../../utils/types.js';
import { Link, useLocation } from 'react-router-dom';
import { OrderItem } from '../OrderItem/OrderItem';
import styles from './Orders.module.css';

export const Orders: FC<TOrders> = ({feedOrders}) => {
  const location = useLocation();

  return (
    <section className={`${styles.content} mb-10`}>
      <h2 className="text text_type_main-medium mt-10 mb-5">Лента заказов</h2>
      <ul className={styles.orderList}>
      {feedOrders?.map((item: TOrder) =>(
          <Link
            className={styles.orderLink}
            key={item._id}
            to={{pathname: `/feed/${item._id}`}}
            state={{background: location}}
          >
            <OrderItem order={item} key={item._id} />
          </Link>
        ))}
      </ul>
    </section>
  );
}

// Orders.propTypes = {
//   feedOrders: PropTypes.arrayOf(ingredientType)
// };
