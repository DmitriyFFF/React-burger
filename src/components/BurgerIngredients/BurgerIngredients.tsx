import React, { useState, useMemo, useEffect, FC } from 'react';
import { Ingredients } from '../Ingredients/Ingredients';
// import { useSelector } from 'react-redux';
import { useSelector } from '../../hooks/hooks';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredients.module.css';
import { useInView } from 'react-intersection-observer';
import { TIngredient } from '../../utils/types';

export const BurgerIngredients: FC = () => {
  const [current, setCurrent] = useState('Булки')
  const [bunRef, inViewBun] = useInView({threshold: .1});
  const [sauceRef, inViewSauce] = useInView({threshold: .1});
  const [mainRef, inViewMain] = useInView({threshold: .5});
  const ingredients = useSelector(store => store.ingredientsReducer.ingredients);

  const buns = useMemo(() => ingredients.filter((item: TIngredient) => item.type === 'bun'), [ingredients]);
  const sauces = useMemo(() => ingredients.filter((item: TIngredient) => item.type === 'sauce'), [ingredients]);
  const mains = useMemo(() => ingredients.filter((item: TIngredient) => item.type === 'main'), [ingredients]);

  useEffect(() => {
    if (inViewBun) {
      setCurrent('Булки');
    } else if (inViewSauce) {
      setCurrent('Соусы');
    } else if (inViewMain) {
      setCurrent('Начинки');
    }
  }, [inViewBun, inViewSauce, inViewMain]);

  return (
    <section className={`${styles.content} mr-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <div className={styles.tabs}>
        <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
        Булки
        </Tab>
        <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
        Соусы
        </Tab>
        <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
        Начинки
        </Tab>
      </div>
      <ul className={`${styles.menu} mt-10`}>
        <li ref={bunRef}>
          <Ingredients data={buns} title={'Булки'} />
        </li>
        <li ref={sauceRef} >
          <Ingredients data={sauces} title={'Соусы'} />
        </li>
        <li ref={mainRef}>
          <Ingredients data={mains} title={'Начинки'} />
        </li>
      </ul>
    </section>
  );
}

