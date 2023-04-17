import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TActiveLink } from "../../utils/types";
import styles from "./AppHeader.module.css";

// type TActiveLink = {
//   isActive: boolean;
// };

const AppHeaderLogo = () => {
  return (
    <Link to="/">
      <Logo />
    </Link>
  );
}

const NavigationMenu = () => {
  const setActiveLink = ({isActive}: TActiveLink) => isActive ? styles.activeLink : styles.link;

  return (
    <ul className={styles.menuContainer}>
      <li className={`${styles.menuItem} pt-4 pr-5 pb-4 mr-1`}>
        <NavLink to="/" className={setActiveLink}>
          <BurgerIcon type="primary"/>
          <p className="text text_type_main-default pl-2">Конструктор</p>
        </NavLink>
      </li>
      <li className={`${styles.menuItem} pt-4 pr-5 pb-4 pl-5`}>
        <NavLink to="/feed" className={setActiveLink}>
          <ListIcon type="secondary"/>
          <p className="text text_type_main-default pl-2">Лента заказов</p>
        </NavLink>
      </li>
    </ul>
  );
}

const Profile = () => {
  const setActiveLink = ({isActive}: TActiveLink) => isActive ? styles.activeLink : styles.link;

  return (
    <div className={styles.menuItem}>
      <NavLink to="/profile" className={setActiveLink}>
        <ProfileIcon type="secondary"/>
        <p className="text text_type_main-default pl-2">Личный кабинет</p>
      </NavLink>
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

