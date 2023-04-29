import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useMemo, FC } from 'react';
import { useSelector } from '../../../hooks/hooks';
import { useLocation, useParams } from 'react-router-dom';
import styles from './OrderInfo.module.css';
import { OrderIngredient } from './OrderIngredient/OrderIngredient';
import { TModalOpen } from '../../../utils/types';

export const OrderInfo: FC<TModalOpen> = ({modalIsOpen}) => {
  const location = useLocation();
  const { id } = useParams();
  const ingredients = useSelector(store => store.ingredientsReducer.ingredients);
  const { orders } = useSelector(store => store.wsReducer);
  const { ordersAuth } = useSelector(store => store.wsAuthReducer);

  const order = orders?.find (item => item._id === id);
  const orderAuth = ordersAuth?.find (item => item._id === id);

  const activeOrder = location.pathname === `/profile/orders/${id}` ? orderAuth : order;

   const orderIngredients = ingredients.filter(item => activeOrder?.ingredients.includes(item._id));

  const orderPrice = useMemo(() => {
    return orderIngredients.reduce((prev, item) => {
      if (item.type === 'bun') {
        return (prev + item.price * 2);
      }
      return (prev + item.price);
    }, 0)},
    [orderIngredients]
  );

  return (
    <>
      {activeOrder &&
        <section className={styles.order}>
          <p className={`${modalIsOpen ? styles.orderNumber : styles.orderNumberPage} text text_type_digits-default`}>#{activeOrder.number}</p>
          <div className={`${styles.orderInfo} mt-5 mb-15`}>
            <h3 className="text text_type_main-medium mb-2">{activeOrder.name}</h3>
            <span className={`${styles.status} text text_type_main-small`}>
            {activeOrder.status === "done"
              ? "Выполнен"
              : activeOrder.status === "pending"
              ? "Готовится"
              : activeOrder.status === "created"
              ? "Создан"
              : "Выполнен"}
            </span>
          </div>
          <div className={styles.ingredientContainer}>
            <p className="text text_type_main-medium mb-6">Состав:</p>
            <ul className={styles.ingredientList}>
              {orderIngredients.map((item, index) => (
                <OrderIngredient ingredient={item} order={activeOrder} key={index}/>
                ))
              }
            </ul>
          </div>
          <div className={styles.timePrice}>
            <p className=" text text_type_main-small">
              <FormattedDate date = {new Date(activeOrder.createdAt)}/>
            </p>
            <div className={styles.orderPrice}>
              <p className="text text_type_digits-default mr-2">{orderPrice}</p>
              <CurrencyIcon type='primary'/>
            </div>
          </div>
        </section>
      }
    </>
  )
};

