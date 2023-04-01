import React from "react";
import styles from "./order.module.css";
import { OrderInfo } from "../../components/OrderFeed/OrderInfo/OrderInfo";

export const Order = () => {

  return (
    <section className={styles.order}>
      <OrderInfo modalIsOpen={false}/>
    </section>
  )
}
