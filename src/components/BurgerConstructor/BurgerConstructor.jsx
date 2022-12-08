import React, { useContext, useMemo } from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';
import { DataContext } from '../../services/AppContext.js';
import { ConstructorOrder } from '../ConstructorOrder/ConstructorOrder.jsx';
import { useSelector } from 'react-redux';

export const BurgerConstructor = () => {
  const ingredients = useSelector(store => store.constructorReducer.ingredients)
  // {data} = useContext(DataContext);

  const bun = ingredients.find(item => item.type === 'bun')
  const fillings = ingredients.filter(item => item.type !== 'bun');


  const totalPrice = useMemo(() =>
    ingredients.reduce((prev, item) => {
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
    <section className={`${styles.content} mt-25 pl-8 pr-4`}>
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
