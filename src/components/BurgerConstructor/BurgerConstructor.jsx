import React, { useMemo } from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { ConstructorOrder } from '../ConstructorOrder/ConstructorOrder.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd/dist/hooks';
import { ADD_BUN, ADD_INGREDIENT } from '../../services/actions/constructor';
import {v4 as uuid } from 'uuid';

export const BurgerConstructor = () => {
  const ingredients = useSelector(state => state.constructorReducer.ingredients);
  const dispatch = useDispatch();

  const[{ isOver }, dropRef] = useDrop({
    accept: 'ingredient',
    collect: monitor => ({
      isOver: monitor.isOver()
    }),
    drop(itemId) {
      handleDrop(itemId);
    }
  });

  const handleDrop = (item) => {
    if (item.type === 'bun') {
      dispatch({
        type: ADD_BUN,
        id: uuid(),
        bun: item
      })
    } else {
      dispatch({
        type: ADD_INGREDIENT,
        id: uuid(),
        ingredient: item
      })
    }
  }

  const bun = useMemo(() => ingredients.find(item => item.type === 'bun'), [ingredients]);
  const fillings = useMemo(() => ingredients.filter(item => item.type !== 'bun'), [ingredients]) ;

  const totalPrice = useMemo(() =>
    ingredients.reduce((prev, item) => {
      //return item.type === 'bun' ? prev + item.price * 2 : prev + item.price
      if (item.price) {
        if (item.type === 'bun') {
          return prev + item.price * 2;
        }
        return prev + item.price;
      }
      return prev;
    }, 0),
    [ingredients]
  );

  return (
    <section
      className={`${styles.content} mt-25 pl-8 pr-4`}
      ref={dropRef}
      style={{border: '2px solid #fff', borderColor: isOver ? 'red' : 'green'}}
    >
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
        {fillings.map(item =>
          <li className={styles.fillingItem} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </li>
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
