import React, { useState, useContext, useReducer, useMemo } from 'react';
//import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../Modal/Modal.jsx';
import { OrderDetails } from '../OrderDetails/OrderDetails.jsx';
//import { ingredientType } from '../../utils/types.js';
import styles from './BurgerConstructor.module.css';
import { DataContext } from '../../services/AppContext.js';
import { ConstructorOrder } from '../ConstructorOrder/ConstructorOrder.jsx';

/*const priceInitialState = {price: null};
  const reducer = (state, action) => {
    switch (action.type) {
      case "set":
        let totalPrice = 0;
        action.forEach(item => totalPrice += item.price);
        return {price: totalPrice};
      case "reset":
        return priceInitialState;
      default:
         throw new Error(`Wrong type of action: ${action.type}`);
    }
  }*/

export const BurgerConstructor = () => {
  //const[isOpen, setIsOpen] = useState(false);
  const {data} = useContext(DataContext);
  //const[state, dispatch] = useReducer(reducer, priceInitialState);

  //const totalPrice = useMemo(() => data.reduce((prev, item) => item.type === 'bun' ? prev + (item.price * 2) : prev + item.price, 0), [data])
  const totalPrice = useMemo(() =>
    data.reduce((prev, item) => {
      if (item.price) {
        if (item.type === 'bun') {
          return prev + item.price * 2;
        }
        return prev + item.price;
      }
      return prev;
    }, 0),
    [data]
  );


  const bun = data.find(item => item.type === 'bun')
  const fillings = data.filter(item => item.type !== 'bun');

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

/*BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
};*/

