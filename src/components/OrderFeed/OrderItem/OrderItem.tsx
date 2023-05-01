import React, { useMemo, FC } from "react";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './OrderItem.module.css';
import { useDispatch, useSelector } from "../../../hooks/hooks";
import { loadOrder } from "../../../services/actions/modal";
import { TOrder, TOrderItem } from "../../../utils/types";

export const OrderItem: FC<TOrderItem> = ({order}) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.ingredientsReducer.ingredients);

  const orderIngredients = ingredients.filter(item => order?.ingredients.includes(item._id));

  const ingredientsHidden = orderIngredients.length > 6 ? orderIngredients.length - 6 : 0;

  const orderPrice = useMemo(() => {
    return orderIngredients.reduce((prev, item) => {
      if (item.type === 'bun') {
        return (prev + item.price * 2);
      }
      return (prev + item.price);
    }, 0)},
    [orderIngredients]
  );

  const handleOpen = (order: TOrder) => {
    dispatch(loadOrder(order));
  };

  return (
    <>
      <li className={styles.order} onClick={() => handleOpen(order)}>
        <div className={styles.orderContainer}>
          <div className={styles.info}>
            <p className="text text_type_digits-default">#{order.number}</p>
            <p className="text text_type_main-default text_color_inactive">
              <FormattedDate date = {new Date(order.createdAt)}/>
            </p>
          </div>
          <h3 className={`${styles.name} text text_type_main-medium`}>{order.name}</h3>
          <div className={styles.components}>
            <ul className={styles.images}>
              {orderIngredients.slice(0, 6).map((item, index) =>
                <li className={styles.imageBorderBox} key={index}>
                  <img className={styles.image} src={item.image} alt={item.name}/>
                  {index === 0 && ingredientsHidden > 0 && (
                    <span className={`${styles.spanImage} text text_type_main-default`}>+{ingredientsHidden}</span>
                  )}
                </li>
              )}
            </ul>
            <div className={`${styles.priceContainer} mt-1 mb-1`}>
              <p className={`${styles.price} text text_type_digits-default`}>{orderPrice}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </li>
    </>
  )
}
