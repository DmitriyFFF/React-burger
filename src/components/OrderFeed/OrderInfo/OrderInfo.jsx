import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { loadIngredient } from '../../services/actions/modal';
import styles from './OrderInfo.module.css';

export const OrderInfo = () => {
  // const { order } = useSelector(store => store.orderReducer);
  const { id } = useParams();
  const {orders} = useSelector(store => store.orderReducer);
  const ingredients = useSelector(store => store.ingredientsReducer.ingredients);


  const order = useMemo(() => {
    return orders.find ((item) => item._id === id)
  }, [id, orders])
  console.log(order)

  const orderIngredients = useMemo(() => {
    return order.ingredients.map((id) => {
      return ingredients.find ((item) => {
        return id === item._id
      })
    })
  }, [ingredients, order.ingredients]);

  const orderPrice = useMemo(() => {
    return orderIngredients.reduce((prev, item) =>
      (prev + item.price), 0)
    },
    [orderIngredients]
  );




  // const ingredients = useSelector(store => store.ingredientsReducer.ingredients);
  // const orderIngredients = useMemo(() => {
  //   return order.ingredients.map((id) => {
  //     return ingredients.find ((item) => {
  //       return id === item._id
  //     })
  //   })
  // }, [ingredients, order.ingredients]);
  // const { loadedIngredient } = useSelector(store => store.modalReducer)
  // const { id } = useParams();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!loadedIngredient) {
  //     const ingredient = ingredients.find(item => item._id === id);
  //     dispatch(loadIngredient(ingredient));
  //   }
  // }, [dispatch, ingredients, loadedIngredient, id])

  return (
    <section className={styles.order}>
      {/* <p className={`${styles.orderId} text text_type_digits-default`}>#111111111</p> */}
      <div className={`${styles.orderInfo} mt-5 mb-15`}>
        <h3 className="text text_type_main-medium mb-2">{order.name}</h3>
        <span className={`${styles.status} text text_type_main-small`}>{order.status}</span>
      </div>
      <div className={styles.ingredientContainer}>
        <p className="text text_type_main-medium mb-6">Состав:</p>
        <ul className={styles.ingredientList}>
          <li className={styles.ingredient}>
            <div className={styles.image}>🎂</div>
            <h4 className="text text_type_main-small ml-4 mr-4 mt-5 mb-5">IngredientName</h4>
            <div className={styles.ingredientPrice}>
              <p className="text text_type_digits-default mr-2">2 x 999</p>
              <CurrencyIcon/>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.timePrice}>
        <p className=" text text_type_main-small">
          <FormattedDate date = {new Date(order.createdAt)}/>
        </p>
        <div className={styles.orderPrice}>
          <p className="text text_type_digits-default mr-2">{orderPrice}</p>
          <CurrencyIcon/>
        </div>
      </div>
    </section>
  )
};

