import React from 'react';
import { Logo, Icons, Typography, Box } from '@ya.praktikum/react-developer-burger-ui-components';

function AppHeaderLogo () {
  return (
    <Logo />
  );
}


function AppHeader () {
  return (
    <header className='header'>
      <Menu>
        <MenuItem>Конструктор</MenuItem>
        <MenuItem>Лента заказов</MenuItem>
      </Menu>
      <AppHeaderLogo />
    </header>
  );
}

export default AppHeader;
