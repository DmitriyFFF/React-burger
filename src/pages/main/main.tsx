import React, { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BurgerIngredients } from '../../components/BurgerIngredients/BurgerIngredients';
import { BurgerConstructor } from '../../components/BurgerConstructor/BurgerConstructor';
import styles from './main.module.css';

export const Main: FC = () => {

  return (
    <DndProvider backend={HTML5Backend}>
      <main className={styles.content}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </DndProvider>
  );
}
