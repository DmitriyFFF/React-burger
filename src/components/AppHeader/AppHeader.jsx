import React from "react";
import { Link } from "react-router-dom";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";

const AppHeaderLogo = () => {
  return (
    <Link to="/">
      <Logo />
    </Link>
  );
}

const NavigationMenu = () => {
  return (
    <ul className={styles.menuContainer}>
      <li className={`${styles.menuItem} pt-4 pr-5 pb-4 mr-1`}>
        <Link to="/" className={styles.link}>
          <BurgerIcon type="primary"/>
          <p className="text text_type_main-default pl-2">Конструктор</p>
        </Link>
      </li>
      <li className={`${styles.menuItem} pt-4 pr-5 pb-4 pl-5`}>
        <Link to="/" className={styles.link}>
          <ListIcon type="secondary"/>
          <p className="text text_type_main-default text_color_inactive pl-2">Лента заказов</p>
        </Link>
      </li>
    </ul>
  );
}

const Profile = () => {
  return (
    <div className={styles.menuItem}>
      <Link to="/profile" className={styles.link}>
        <ProfileIcon type="secondary"/>
        <p className="text text_type_main-default text_color_inactive pl-2">Личный кабинет</p>
      </Link>
    </div>
  );
}

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} pt-4 pb-4`}>
        <NavigationMenu />
        <AppHeaderLogo />
        <Profile />
      </div>
    </header>
  );
}

