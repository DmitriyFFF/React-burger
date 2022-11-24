import React, { useState, useContext, useEffect } from 'react';
//import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Modal } from '../Modal/Modal.jsx';
import { OrderDetails } from '../OrderDetails/OrderDetails.jsx';
//import { ingredientType } from '../../utils/types.js';
import styles from './BurgerConstructor.module.css';
import { DataContext } from '../../services/AppContext.js';
import { request, baseUrl, ingredientsId } from '../../utils/constants';
import { ConstructorOrder } from '../ConstructorOrder/ConstructorOrder.jsx';


export const BurgerConstructor = () => {
  //const[isOpen, setIsOpen] = useState(false);
  const {data} = useContext(DataContext);

  /*const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };*/

  /*useEffect(() => {
    const postData = () => {
      request(`${baseUrl}/orders`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          "ingredients": ["609646e4dc916e00276b286e", "609646e4dc916e00276b2870"]
         }),
      })
        .then (res => postData(res.order.number))
        .catch((err) => {
          console.log(err);
        })
    };
    postData();
  }, []);*/

  //const ingredientsId = data.map(ingredient => ingredient._id)

  /*const postData = () => {
    request(`${baseUrl}/orders`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        ingredients: ingredientsId
       }),
    })
      //.then (res => postData(res.order.number))
      .catch((err) => {
        console.log(err);
      })
  };
  postData();*/

  const fillings = data.filter(item => item.type !== 'bun');

  return (
    <section className={`${styles.content} mt-25 pl-8 pr-4`}>
      <div>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        />
      </div>
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
      <div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
        />
      </div>
      <ConstructorOrder />
    </section>
  )
}

/*BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientType).isRequired
};*/

