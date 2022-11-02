import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './AppHeader.module.css';

function AppHeaderLogo () {
  return (
    <Logo />
  );
}

function NavigationMenu () {
  return (
    <ul className={appHeaderStyles.menuContainer}>
      <li className={`${appHeaderStyles.menuItem} pt-4 pr-5 pb-4 mr-1`}>
        <BurgerIcon type="primary"/>
        <p className="text text_type_main-default pl-2">Конструктор</p>
      </li>
      <li className={`${appHeaderStyles.menuItem} pt-4 pr-5  pb-4 pl-5`}>
        <ListIcon type="secondary"/>
        <p className="text text_type_main-default text_color_inactive pl-2">Лента заказов</p>
      </li>
    </ul>
  );
}

function Profile () {
  return (
    <div className={appHeaderStyles.menuItem}>
      <ProfileIcon type="secondary"/>
      <p className="text text_type_main-default text_color_inactive pl-2">Личный кабинет</p>
    </div>
  );
}

function AppHeader () {
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

export default AppHeader;
