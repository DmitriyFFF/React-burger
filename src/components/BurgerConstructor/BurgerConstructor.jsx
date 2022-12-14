import React, { useMemo } from 'react';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { ConstructorOrder } from '../ConstructorOrder/ConstructorOrder.jsx';
import { ConstructorItem } from '../ConstructorItem/ConstructorItem';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd/dist/hooks';
import { addIngredient } from '../../services/actions/constructor';

export const BurgerConstructor = () => {
  const ingredients = useSelector(state => state.constructorReducer.ingredients);
  const bun = useSelector(state => state.constructorReducer.bun)
  const dispatch = useDispatch();

  const[, dropRef] = useDrop({
    accept: 'ingredient',
    drop(item) {
      dispatch(addIngredient(item));
    }
  });

  const totalPrice = useMemo(() => {
    return ingredients.reduce((prev, item) =>
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
        {ingredients.map((ingredient, index) => (
            <ConstructorItem
              key={ingredient.key}
              ingredient={ingredient}
              index={index}
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
