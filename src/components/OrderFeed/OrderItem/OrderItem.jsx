import React, { useState } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './OrderItem.module.css';
import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../../../services/actions/modal";

export const OrderItem = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    dispatch({
      type: OPEN_MODAL
    });
    setIsOpen(true);
  };
  return (
    <>
      <li className={styles.order} onClick={() => handleOpen()}>
        <div className={styles.orderContainer}>
          <div className={styles.info}>
            <p className="text text_type_digits-default">#111111111</p>
            <p className="text text_type_main-default">22.22.22</p>
          </div>
          <h3 className={`${styles.name} text text_type_main-medium`}>Name</h3>
          <div className={styles.components}>
            <div className={styles.images}>Image of components</div>
            <div className={`${styles.priceContainer} mt-1 mb-1`}>
              <p className={`${styles.price} text text_type_digits-default`}>999</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      </li>
    </>
  )
}
