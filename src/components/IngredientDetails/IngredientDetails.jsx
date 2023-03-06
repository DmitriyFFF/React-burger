import React, {useMemo, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ingredientType } from '../../utils/types';
import { loadIngredient, openModal } from '../../services/actions/modal';
import styles from './IngredientDetails.module.css';

export const IngredientDetails = () => {
  // const { ingredients } = useSelector(store => store.ingredientsReducer);
  // const { id } = useParams();

  // const ingredient = useMemo(() => {
  //   ingredients.find(item => item._id === id)
  // }, [ingredients, id]);
  // console.log(ingredients)

//   return (
//     <section className={styles.content}>
//       {/* {ingredient && */}
//       <>
//         <img className={styles.image} src={ingredient.image} alt={ingredient.name} />
//         <h2 className={`${styles.title} text text_type_main-medium mt-4`}>{ingredient.name}</h2>
//         <ul className={`${styles.container} mt-8 mb-15`}>
//           <li className={styles.detailItem}>
//             <h3 className="text text_type_main-default">Калории,ккал</h3>
//             <p className="text text_type_digits-default mt-2">{ingredient.calories}</p>
//           </li>
//           <li className={styles.detailItem}>
//             <h3 className="text text_type_main-default">Белки, г</h3>
//             <p className="text text_type_digits-default mt-2">{ingredient.proteins}</p>
//           </li>
//           <li className={styles.detailItem}>
//             <h3 className="text text_type_main-default">Жиры, г</h3>
//             <p className="text text_type_digits-default mt-2">{ingredient.fat}</p>
//           </li>
//           <li className={styles.detailItem}>
//             <h3 className="text text_type_main-default">Углеводы, г</h3>
//             <p className="text text_type_digits-default mt-2">{ingredient.carbohydrates}</p>
//           </li>
//         </ul>
//       </>
//       {/* } */}
//     </section>
//   )
// };
  const { ingredients } = useSelector(store => store.ingredientsReducer);
  const { loadedIngredient } = useSelector(store => store.modalReducer)
  const { id } = useParams();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!loadedIngredient && ingredients && id) {
  //     const ingredient = ingredients.find(item => item._id === id)
  //     dispatch(loadIngredient(ingredient));
  //   }
  // }, [dispatch, id, loadedIngredient, ingredients])

  // const ingredient = useMemo(() => {
  //   ingredients.find(item => item._id === id)
  // }, [ingredients, id]);
  // console.log(loadedIngredient)

  // useEffect(() => {
  //   dispatch(loadIngredient(ingredient));
  //   dispatch(openModal())
  // }, [dispatch, ingredient])
  useEffect(() => {
    if (!loadedIngredient) {
      const ingredient = ingredients.find(item => item._id === id);
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
      <h3>aaaaaa</h3>
    )}

    </>
  )
};

IngredientDetails.propTypes = ingredientType.isRequired;
