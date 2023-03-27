import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { loadOrder } from '../../../services/actions/modal';
import { wsConnectionClosed, wsConnectionSuccess } from '../../../services/actions/wsAction';
import { wsAuthConnectionClosed, wsAuthConnectionSuccess } from '../../../services/actions/wsAuthAction';
// import { useParams } from 'react-router-dom';
// import { loadIngredient } from '../../services/actions/modal';
import styles from './OrderInfo.module.css';
import { OrderIngredient } from './OrderIngredient/OrderIngredient';

export const OrderInfo = () => {
  const [orderIngredients, setOrderIngredients] = useState([])
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const ingredients = useSelector(store => store.ingredientsReducer.ingredients);
  const { orders } = useSelector(store => store.wsReducer);
  const { ordersAuth } = useSelector(store => store.wsAuthReducer);
  // const [status, setStatus] = useState('');
  // const { order } = useSelector(store => store.orderReducer);
  const order = orders.find ((item) => item._id === id);
  const orderAuth = ordersAuth.find ((item) => item._id === id);
  // const feed = `/feed/${id}`;
  // const profile = `/profile/orders/${id}`

  const activeOrder = location.pathname === `/profile/orders/${id}` ? orderAuth : order;

  // console.log(location.pathname)


  // useEffect(() => {
  //   dispatch(location.pathname === "/feed" ? wsConnectionSuccess() : wsAuthConnectionSuccess());
  //   return () => {
  //     dispatch(location.pathname === "/profile/orders" ? wsConnectionClosed() : wsAuthConnectionClosed());
  //   };
  // }, [dispatch, location]);

  useEffect(() => {
    const tmpIngredients = ingredients.filter((item) => activeOrder?.ingredients.includes(item._id))
    setOrderIngredients(tmpIngredients)
  }, [ingredients, activeOrder])
  // console.log(ingredients)

  // console.log(orderIngredients)

  // const orderIngredients = useMemo(() => {
  //   return order.ingredients.map((id) => {
  //     return ingredients.find ((item) => {
  //       return id === item._id
  //     })
  //   })
  // }, [ingredients, order.ingredients]);

  const orderPrice = useMemo(() => {
    return orderIngredients.reduce((prev, item) =>
      (prev + item.price), 0)
    },
    [orderIngredients]
  );

  console.log(orderIngredients)

  // useEffect(() => {
  //   switch (order.status) {
  //     case 'done':
  //       setStatus('Выполнен')
  //       break;
  //     case 'pending':
  //       setStatus('Готовится')
  //       break;
  //     case 'created':
  //       setStatus('Создан')
  //       break;
  //     default:
  //       setStatus('Отменен');
  //   }
  // }, [])

  // const status = order.status === 'done' ? 'Выполнен' :
  //                order.status === 'pending' ? 'Готовится' :
  //                order.status === 'created' ? 'Создан' : 'Отменен'

  // const count = useMemo(() => {
  //   return orderIngredients.filter(item => item._id === ingredient._id).length
  //   },
  //   [orderIngredients]
  // );

  // const { loadedOrder } = useSelector(store => store.modalReducer)
  // const { id } = useParams();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!loadedOrder) {
  //     const order = orders.find(item => item._id === id);
  //     dispatch(loadOrder(order));
  //   }
  // }, [dispatch, orders, loadedOrder, id])

  return (
    <>
      {activeOrder &&
        <section className={styles.order}>
          <p className={`${styles.orderNumber} text text_type_digits-default`}>#{activeOrder.number}</p>
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
              <CurrencyIcon/>
            </div>
          </div>
        </section>

    }
    </>

  )
};

