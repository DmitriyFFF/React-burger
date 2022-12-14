import { v4 as uuid } from 'uuid';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const CLEAR_INGREDIENTS = 'CLEAR_INGREDIENTS';

  export const addIngredient = (payload) => ({
    type: ADD_INGREDIENT,
      payload: {
        ...payload,
        key: uuid()
      }
  });

  export const deleteIngredient = (payload) => ({
    type: DELETE_INGREDIENT,
    payload
  });
