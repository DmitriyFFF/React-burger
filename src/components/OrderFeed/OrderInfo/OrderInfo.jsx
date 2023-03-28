import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { loadOrder } from '../../../services/actions/modal';
import styles from './OrderInfo.module.css';
import { OrderIngredient } from './OrderIngredient/OrderIngredient';

export const OrderInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const ingredients = useSelector(store => store.ingredientsReducer.ingredients);
  const  loadedOrder  = useSelector(store => store.modalReducer.loadedOrder)
  const { orders } = useSelector(store => store.wsReducer);
  const { ordersAuth } = useSelector(store => store.wsAuthReducer);

  const order = orders.find ((item) => item._id === id);
  const orderAuth = ordersAuth.find ((item) => item._id === id);

  const activeOrder = location.pathname === `/profile/orders/${id}` ? orderAuth : order;

  const orderIngredients = useMemo(() => {
    return activeOrder.ingredients.map((id) => {
      return ingredients.find ((item) => {
        return id === item._id
      })
    })
  }, [ingredients, activeOrder.ingredients]);

  const orderPrice = useMemo(() => {
    return orderIngredients.reduce((prev, item) =>
      (prev + item.price), 0)
    },
    [orderIngredients]
  );

  useEffect(() => {
    dispatch(loadOrder(activeOrder));
  }, [dispatch,loadedOrder, activeOrder, id])

  return (
    <>
      {loadedOrder ? (
        <section className={styles.order}>
          <p className={`${styles.orderNumber} text text_type_digits-default`}>#{loadedOrder.number}</p>
          <div className={`${styles.orderInfo} mt-5 mb-15`}>
            <h3 className="text text_type_main-medium mb-2">{loadedOrder.name}</h3>
            <span className={`${styles.status} text text_type_main-small`}>
            {loadedOrder.status === "done"
              ? "Выполнен"
              : loadedOrder.status === "pending"
              ? "Готовится"
              : loadedOrder.status === "created"
              ? "Создан"
              : "Выполнен"}
            </span>
          </div>
          <div className={styles.ingredientContainer}>
            <p className="text text_type_main-medium mb-6">Состав:</p>
            <ul className={styles.ingredientList}>
              {orderIngredients.map((item, index) => (
                <OrderIngredient ingredient={item} order={loadedOrder} key={index}/>
                ))
              }
            </ul>
          </div>
          <div className={styles.timePrice}>
            <p className=" text text_type_main-small">
              <FormattedDate date = {new Date(loadedOrder.createdAt)}/>
            </p>
            <div className={styles.orderPrice}>
              <p className="text text_type_digits-default mr-2">{orderPrice}</p>
              <CurrencyIcon/>
            </div>
          </div>
        </section>) : (
          <p className="text text_type_main-large mt-8">Идет загрузка...</p>
        )

    }
    </>

  )
};

