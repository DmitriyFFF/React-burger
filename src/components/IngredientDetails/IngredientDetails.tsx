import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from '../../hooks/hooks';
import { useParams } from 'react-router-dom';
import { loadIngredient } from '../../services/actions/modal';
import styles from './IngredientDetails.module.css';
import { TIngredient } from '../../utils/types';

export const IngredientDetails: FC = () => {
  const { ingredients } = useSelector(store => store.ingredientsReducer);
  const { loadedIngredient } = useSelector(store => store.modalReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loadedIngredient) {
      const ingredient = ingredients.find((item: TIngredient) => item._id === id);
      dispatch(loadIngredient(ingredient));
    }
  }, [dispatch, ingredients, loadedIngredient, id])

  return (
    <>
      {loadedIngredient ? (
        <section className={styles.content}>
          <img className={styles.image} src={loadedIngredient.image} alt={loadedIngredient.name} />
          <h2 className={`${styles.title} text text_type_main-medium mt-4`}>{loadedIngredient.name}</h2>
          <ul className={`${styles.container} mt-8 mb-15`}>
            <li className={styles.detailItem}>
              <h3 className="text text_type_main-default">Калории,ккал</h3>
              <p className="text text_type_digits-default mt-2">{loadedIngredient.calories}</p>
            </li>
            <li className={styles.detailItem}>
              <h3 className="text text_type_main-default">Белки, г</h3>
              <p className="text text_type_digits-default mt-2">{loadedIngredient.proteins}</p>
            </li>
            <li className={styles.detailItem}>
              <h3 className="text text_type_main-default">Жиры, г</h3>
              <p className="text text_type_digits-default mt-2">{loadedIngredient.fat}</p>
            </li>
            <li className={styles.detailItem}>
              <h3 className="text text_type_main-default">Углеводы, г</h3>
              <p className="text text_type_digits-default mt-2">{loadedIngredient.carbohydrates}</p>
            </li>
          </ul>
        </section>
        ) : (
        <h3 className="text text_type_main-large mt-8">Идет загрузка...</h3>
      )}
    </>
  )
};

