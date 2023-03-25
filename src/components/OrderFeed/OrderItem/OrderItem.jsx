import React, { useMemo, useState } from "react";
import { CurrencyIcon, FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './OrderItem.module.css';
import { useDispatch, useSelector } from "react-redux";
import { loadOrder, OPEN_MODAL } from "../../../services/actions/modal";

export const OrderItem = ({order}) => {
  // const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.ingredientsReducer.ingredients);

  const orderIngredients = useMemo(() => {
    return order.ingredients.map((id) => {
      return ingredients.find ((item) => {
        return id === item._id
      })
    })
  }, [ingredients, order.ingredients]);
  // console.log(orderIngredients)

  const ingredientsHidden = orderIngredients.length > 6 ? orderIngredients.length - 6 : null;

  const orderPrice = useMemo(() => {
    return orderIngredients.reduce((prev, item) =>
      (prev + item.price), 0)
    },
    [orderIngredients]
  );

  const handleOpen = () => {
    dispatch(loadOrder(order));
    // dispatch({
    //   type: OPEN_MODAL
    // });
    // setIsOpen(true);
  };
  return (
    <>
      <li className={styles.order} onClick={() => handleOpen()}>
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
              // index < 5 ? (
              //   <div className={styles.imageBorderBox}  key={index}>
              //     <img className={styles.image} src={item.image} alt={item.name}/>
              //   </div>) :
              //   <div className={styles.imageBorderBox}  key={index}>
              //     <img className={styles.image} src={item.image} alt={item.name}/>
              //     <span className={`${styles.spanImage} text text_type_main-default`}>{`+${orderIngredients.length - 5}`}</span>
              //   </div>
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
