import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ProfileForm } from "../../components/Profile/ProfileForm/ProfileForm";
import { ProfileNavigation } from "../../components/Profile/ProfileNavigation/ProfileNavigation";
import { ProfileOrders } from "../../components/Profile/ProfileOrders/ProfileOrders";
import { wsAuthConnectionClosed, wsAuthConnectionSuccess } from "../../services/actions/wsAuthAction";
import styles from "./profile.module.css";

export const Profile = () => {
  const dispatch = useDispatch();
  const { ordersAuth } = useSelector(store => store.wsAuthReducer);

  useEffect(() => {
    dispatch(wsAuthConnectionSuccess());
    return () => {
      dispatch(wsAuthConnectionClosed());
    };
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <ProfileNavigation />
      <Routes>
        <Route path="/" element={<ProfileForm />} />
        <Route path="/orders" element={<ProfileOrders profileOrders={ordersAuth} />} />
      </Routes>
    </section>
  );
};
