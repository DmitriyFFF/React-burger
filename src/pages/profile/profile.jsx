import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProfileForm } from "../../components/Profile/ProfileForm/ProfileForm";
import { ProfileNavigation } from "../../components/Profile/ProfileNavigation/ProfileNavigation";
import { ProfileOrders } from "../../components/Profile/ProfileOrders/ProfileOrders";
import styles from "./profile.module.css";

export const Profile = () => {

  return (
    <section className={styles.container}>
      <ProfileNavigation />
      <Routes>
        <Route path="/" element={<ProfileForm />} />
        <Route path="/orders" element={<ProfileOrders />} />
      </Routes>
    </section>
  );
};
