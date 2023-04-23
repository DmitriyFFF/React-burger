import React, { useMemo, FC } from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { ConstructorOrder } from '../ConstructorOrder/ConstructorOrder';
import { ConstructorItem } from '../ConstructorItem/ConstructorItem';
import { useDispatch, useSelector } from '../../hooks/hooks';
// import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd/dist/hooks';
import { addIngredient, deleteIngredient } from '../../services/actions/constructor';
import { TIngredient } from '../../utils/types';

export const BurgerConstructor: FC = () => {
  const ingredients = useSelector(store => store.constructorReducer.ingredients);
  const bun = useSelector(store => store.constructorReducer.bun)
  const dispatch = useDispatch();

  const[, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item: TIngredient) {
      dispatch(addIngredient(item));
    }
  });

  const totalPrice = useMemo(() => {
    return ingredients.reduce((prev: number, item: TIngredient) =>
      prev + item.price, 0) + (bun ? bun.price * 2 : 0)
    },
    [bun, ingredients]
  );

  return (
    <section className={`${styles.content} mt-25 pl-8 pr-4`} ref={dropRef}>
      {bun &&
        <div>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>}
      <ul className={styles.fillingList}>
        {ingredients.map((ingredient: TIngredient, index: number) => (
            <ConstructorItem
              key={ingredient.key}
              ingredient={ingredient}
              index={index}
              deleteIngredient={deleteIngredient}
            />)
        )}
      </ul>
      {bun &&
        <div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>}
      <ConstructorOrder totalPrice={totalPrice}/>
    </section>
  )
}
