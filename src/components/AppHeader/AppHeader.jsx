import React from "react";
import { Link } from "react-router-dom";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import appHeaderStyles from "./AppHeader.module.css";

const AppHeaderLogo = () => {
  return (
    <Link to="/">
      <Logo />
    </Link>
  );
}

const NavigationMenu = () => {
  return (
    <ul className={appHeaderStyles.menuContainer}>
      <li className={`${appHeaderStyles.menuItem} pt-4 pr-5 pb-4 mr-1`}>
        <BurgerIcon type="primary"/>
        <Link className="text text_type_main-default pl-2">Конструктор</Link>
      </li>
      <li className={`${appHeaderStyles.menuItem} pt-4 pr-5 pb-4 pl-5`}>
        <ListIcon type="secondary"/>
        <Link className="text text_type_main-default text_color_inactive pl-2">Лента заказов</Link>
      </li>
    </ul>
  );
}

const Profile = () => {
  return (
    <div className={appHeaderStyles.menuItem}>
      <ProfileIcon type="secondary"/>
      <Link className="text text_type_main-default text_color_inactive pl-2" to="/login">Личный кабинет</Link>
    </div>
  );
}

export const AppHeader = () => {
  return (
    <header className={appHeaderStyles.header}>
      <div className={`${appHeaderStyles.container} pt-4 pb-4`}>
        <NavigationMenu />
        <AppHeaderLogo />
        <Profile />
      </div>
    </header>
  );
}

