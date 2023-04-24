import React, { FC } from "react";
import { useSelector } from "../../hooks/hooks";
// import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ProfileForm } from "../../components/Profile/ProfileForm/ProfileForm";
import { ProfileNavigation } from "../../components/Profile/ProfileNavigation/ProfileNavigation";
import { ProfileOrders } from "../../components/Profile/ProfileOrders/ProfileOrders";
import styles from "./profile.module.css";

export const Profile: FC = () => {
  const { ordersAuth } = useSelector(store => store.wsAuthReducer);

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
