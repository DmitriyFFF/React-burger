import React, { useEffect } from "react";
import styles from "./order.module.css";
import { OrderInfo } from "../../components/OrderFeed/OrderInfo/OrderInfo";
import { wsConnectionClosed, wsConnectionSuccess } from "../../services/actions/wsAction";
import { wsAuthConnectionClosed, wsAuthConnectionSuccess } from "../../services/actions/wsAuthAction";
import { useDispatch } from "react-redux";

export const Order = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionSuccess());
    dispatch(wsAuthConnectionSuccess());
    return () => {
      dispatch(wsConnectionClosed());
      dispatch(wsAuthConnectionClosed());
    };
  }, [dispatch]);

  return (
    <section className={styles.order}>
      <OrderInfo modalIsOpen={false}/>
    </section>
  )
}
