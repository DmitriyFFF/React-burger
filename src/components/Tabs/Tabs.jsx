import React from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import {  useSelector } from 'react-redux';
import styles from './Tabs.module.css';

export const Tabs = ({onClick}) => {
  const current = useSelector(state => state.ingredientsReducer.tab);

  return (
    <div className={styles.tabs}>
      <Tab value="Булки" active={current === 'Булки'} onClick={(evt) => onClick(evt)}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'} onClick={(evt) => onClick(evt)}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'} onClick={(evt) => onClick(evt)}>
        Начинки
      </Tab>
    </div>
  )
}

Tabs.propTypes = {
  onClose: PropTypes.func
}
