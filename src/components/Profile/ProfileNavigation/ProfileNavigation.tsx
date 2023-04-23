import React, { FC } from "react";
import { useDispatch } from "../../../hooks/hooks";
// import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { postLogout } from "../../../services/actions/auth";
import styles from "./ProfileNavigation.module.css";
import { TActiveLink } from "../../../utils/types";

export const ProfileNavigation: FC = () => {
  const dispatch = useDispatch();

  const setActiveLink = ({isActive}: TActiveLink) => isActive ? styles.activeLink : styles.link;
  const logout = () => {
    dispatch(postLogout());
  };

  return (
    <nav className={`${styles.navigation} mr-15`}>
      <ul className={styles.list}>
        <li className={`${styles.listItem} text text_type_main-medium`}>
          <NavLink className={setActiveLink} to="/profile" end>Профиль</NavLink>
        </li>
        <li className={`${styles.listItem} text text_type_main-medium`}>
          <NavLink className={setActiveLink} to="/profile/orders">История заказов</NavLink>
        </li>
        <li className={styles.listItem}>
          <button className={`${styles.exitButton} text text_type_main-medium text_color_inactive`} onClick={logout}>Выход</button>
        </li>
      </ul>
      <p className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}>В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные</p>
    </nav>
  )
}
