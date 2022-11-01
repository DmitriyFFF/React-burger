import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';
import appHeaderStyles from './AppHeader.module.css';

function AppHeaderLogo () {
  return (
    <Logo />
  );
}

/*function NavigationMenu () {
  return (
    <nav className={appHeaderStyles.container}>
      <MenuItems />
    </nav>
  );
}*/

function NavigationMenu () {
  return (
    <ul className={appHeaderStyles.menuContainer}>
      <li className={appHeaderStyles.menuItem}>
        <BurgerIcon type='primary'/>
        <p className='text'>Конструктор</p>
      </li>
      <li className={appHeaderStyles.menuItem}>
        <ListIcon type='primary'/>
        <p className='text'>Лента заказов</p>
      </li>
    </ul>
  );
}

function Profile () {
  return (
    <div className={appHeaderStyles.menuItem}>
      <ProfileIcon type='primary'/>
      <p className='text'>Личный кабинет</p>
    </div>
  );
}

/*function MenuItem (props) {
  return (
    <ul>
      <li className='item'>
        {props.value}
      </li>
      <li className='item'>
        {props.value}
      </li>
    </ul>
  );
}

function Menu (props) {
  return (
    <nav className='menu'>
      {props.children}
    </nav>
  );
}*/


function AppHeader () {
  return (
    <header className={appHeaderStyles.header}>
      <NavigationMenu />
      <AppHeaderLogo />
      <Profile />
    </header>
  );
}

export default AppHeader;
