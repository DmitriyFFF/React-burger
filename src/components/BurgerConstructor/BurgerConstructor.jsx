import React from 'react';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerConstructor.module.css';

const BurgerConstructor = () => {
  return (
    <section className={`${styles.main} mt-25 pl-8 pr-4`}>
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
        <li className={styles.fillingItem}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
          />
        </li>
        <li className={styles.fillingItem}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
          />
        </li>
        <li className={styles.fillingItem}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
          />
        </li>
        <li className={styles.fillingItem}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
          />
        </li>
        <li className={styles.fillingItem}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
          />
        </li>
        <li className={styles.fillingItem}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
          />
        </li>
        <li className={styles.fillingItem}>
          <DragIcon type="primary" />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail="https://code.s3.yandex.net/react/code/meat-04.png"
          />
        </li>
      </ul>
      <div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail="https://code.s3.yandex.net/react/code/bun-01.png"
        />
      </div>
      <div className={`${styles.order} mt-10`}>
        <div className={`${styles.priceContainer} mt-1 mb-1 mr-10`}>
          <p className={`${styles.price} text text_type_digits-medium`}>100500</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  )
}

export default BurgerConstructor;
