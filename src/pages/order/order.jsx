import React, { useMemo, useEffect } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";
import { OrderIngredient } from "../../components/OrderFeed/OrderInfo/OrderIngredient/OrderIngredient";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { wsConnectionClosed, wsConnectionSuccess } from "../../services/actions/wsAction";
import { wsAuthConnectionClosed, wsAuthConnectionSuccess } from "../../services/actions/wsAuthAction";
import { OrderInfo } from "../../components/OrderFeed/OrderInfo/OrderInfo";

export const Order = () => {
  const dispatch = useDispatch();
  // const { orders } = useSelector(store => store.wsReducer);
  // const ingredients = useSelector(store => store.ingredientsReducer.ingredients);
  // useEffect(() => {
  //   dispatch(wsConnectionSuccess());
  //   dispatch(wsAuthConnectionSuccess());
  //   return () => {
  //     dispatch(wsConnectionClosed());
  //     dispatch(wsAuthConnectionClosed());
  //   };
  // }, [dispatch]);

  return (
    <section className={styles.order}>
      <OrderInfo/>
    </section>
  )
  // const { id } = useParams();
  // console.log(ingredients)

  // const order = useMemo(() => {
  //   return orders.find ((item) => item._id === id)
  // }, [id, orders])

  // const orderIngredients = useMemo(() => {
  //   return order.ingredients.map((id) => {
  //     return ingredients.find ((item) => {
  //       return id === item._id
  //     })
  //   })
  // }, [ingredients, order.ingredients]);

  // const orderPrice = useMemo(() => {
  //   return orderIngredients.reduce((prev, item) =>
  //     (prev + item.price), 0)
  //   },
  //   [orderIngredients]
  // );

  // return (
  //   <section className={styles.order}>
  //     <p className={`${styles.orderId} text text_type_digits-default`}>#111111111</p>
  //     <div className={`${styles.orderInfo} mt-10 mb-15`}>
  //       <h3 className="text text_type_main-medium mb-3">OrderName OrderName OrderName</h3>
  //       <span className={`${styles.status} text text_type_main-small`}>Выполнен</span>
  //     </div>
  //     <div className={styles.ingredientContainer}>
  //       <p className="text text_type_main-medium mb-6">Состав:</p>
  //       <ul className={styles.ingredientList}>
  //       <li className={styles.ingredient}>
  //           <div className={styles.image}>🎂</div>
  //           <h4 className="text text_type_main-small ml-4 mr-4 mt-5 mb-5">IngredientName</h4>
  //           <div className={styles.ingredientPrice}>
  //             <p className="text text_type_digits-default mr-2">2 x 999</p>
  //             <CurrencyIcon/>
  //           </div>
  //         </li>
  //         {/* <li className={styles.ingredient}>
  //         {orderIngredients.map((item, index) => (
  //           <OrderIngredient ingredient={item} key={index}/>
  //           ))
  //         }
  //         </li> */}
  //       </ul>
  //     </div>
  //     <div className={styles.timePrice}>
  //       <p className=" text text_type_main-small">TimeStamp</p>
  //       <div className={styles.orderPrice}>
  //         <p className="text text_type_digits-default mr-2">{orderPrice}</p>
  //         <CurrencyIcon/>
  //       </div>
  //     </div>
  //   </section>
  // )
}
