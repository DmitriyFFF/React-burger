import { v4 as uuid } from 'uuid';
import { TIngredient } from '../../utils/types';
export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const DELETE_INGREDIENT: 'DELETE_INGREDIENT' = 'DELETE_INGREDIENT';
export const MOVE_INGREDIENT: 'MOVE_INGREDIENT' = 'MOVE_INGREDIENT';
export const CLEAR_INGREDIENTS: 'CLEAR_INGREDIENTS' = 'CLEAR_INGREDIENTS';

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: TIngredient;
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: TIngredient;
}

export interface IMoveIngredientAction {
  readonly type: typeof MOVE_INGREDIENT;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export interface IClearIngredientsAction {
  readonly type: typeof CLEAR_INGREDIENTS;
}

export type TConstructorActions =
  | IAddIngredientAction
  | IDeleteIngredientAction
  | IMoveIngredientAction
  | IClearIngredientsAction;

export const addIngredient = (payload: TIngredient): IAddIngredientAction => ({//: ReadonlyArray<TIngredient> возможно заменить
  type: ADD_INGREDIENT,
  payload: {
    ...payload,
    key: uuid()
  }
});

export const deleteIngredient = (payload: TIngredient): IDeleteIngredientAction => ({//: ReadonlyArray<TIngredient> возможно заменить
  type: DELETE_INGREDIENT,
  payload
});

export const moveIngredient = (dragIndex: number, hoverIndex: number): IMoveIngredientAction => ({
  type: MOVE_INGREDIENT,
  dragIndex,
  hoverIndex
});

export const clearIngredients = (): IClearIngredientsAction => ({
  type: CLEAR_INGREDIENTS
});
