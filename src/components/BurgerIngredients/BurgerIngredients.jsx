import React, { useMemo, useRef } from 'react';
import { Ingredients } from '../Ingredients/Ingredients.jsx';
import { Tabs } from '../Tabs/Tabs.jsx';
import { useSelector, useDispatch } from 'react-redux';
import styles from './BurgerIngredients.module.css';
import { SET_INGREDIENT_TAB } from '../../services/actions/ingredients.js';

export const BurgerIngredients = () => {
  const ingredients = useSelector(state => state.ingredientsReducer.ingredients);
  const dispatch = useDispatch();

  const buns = useMemo(() => ingredients.filter(item => item.type === 'bun'), [ingredients]);
  const sauces = useMemo(() => ingredients.filter(item => item.type === 'sauce'), [ingredients]);
  const mains = useMemo(() => ingredients.filter(item => item.type === 'main'), [ingredients]);

  const bunsTab = useRef(null);
  const sausesTab = useRef(null);
  const mainsTab = useRef(null);

  const scrollTab = (tab) => {
    dispatch({
      type: SET_INGREDIENT_TAB,
      tab
    });
    switch (tab) {
      case 'Булки':
        bunsTab.current.scrollIntoView({behavior: 'smooth'})
        break;
      case 'Соусы':
        sausesTab.current.scrollIntoView({behavior: 'smooth'})
        break;
      case 'Начинки':
        mainsTab.current.scrollIntoView({behavior: 'smooth'})
        break;
      default:
        break;
    }
  }

  return (
    <section className={`${styles.content} mr-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs onClick={scrollTab}/>
      <ul className={`${styles.menu} mt-10`}>
        <li ref={bunsTab}>
          <Ingredients data={buns} title={'Булки'} />
        </li>
        <li ref={sausesTab} >
          <Ingredients data={sauces} title={'Соусы'} />
        </li>
        <li ref={mainsTab}>
          <Ingredients data={mains} title={'Начинки'} />
        </li>
      </ul>
    </section>
  );
}

