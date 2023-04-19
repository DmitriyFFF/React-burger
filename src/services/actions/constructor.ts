import { v4 as uuid } from 'uuid';
import { TIngredient } from '../../utils/types';
export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const MOVE_INGREDIENT: 'MOVE_INGREDIENT' = 'MOVE_INGREDIENT';
export const CLEAR_INGREDIENTS: 'CLEAR_INGREDIENTS' = 'CLEAR_INGREDIENTS';

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: TIngredient;
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: TIngredient;
}

export interface IMoveIngredient {
  readonly type: typeof MOVE_INGREDIENT;
}

export interface IClearIngredients {
  readonly type: typeof CLEAR_INGREDIENTS;
}

export type TConstructorActions =
  | IAddIngredient
  | IDeleteIngredient
  | IMoveIngredient
  | IClearIngredients;

export const addIngredient = (payload: TIngredient): IAddIngredient => ({//: ReadonlyArray<TIngredient> возможно заменить
  type: ADD_INGREDIENT,
  payload: {
    ...payload,
    key: uuid()
  }
});

export const deleteIngredient = (payload: TIngredient): IDeleteIngredient => ({//: ReadonlyArray<TIngredient> возможно заменить
  type: DELETE_INGREDIENT,
  payload
});

export const moveIngredient = (): IMoveIngredient => ({
  type: MOVE_INGREDIENT
});

export const clearIngredients = (): IClearIngredients => ({
  type: CLEAR_INGREDIENTS
});
