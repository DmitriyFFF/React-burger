import { TIngredient, TOrder } from "../../utils/types";
import { AppThunk } from "../types";

export const OPEN_MODAL: 'OPEN_MODAL' = 'OPEN_MODAL';
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';
export const LOAD_INGREDIENT: 'LOAD_INGREDIENT' = 'LOAD_INGREDIENT';
export const LOAD_ORDER: 'LOAD_ORDER' = 'LOAD_ORDER';

export interface IOpenModalAction {
  readonly type: typeof OPEN_MODAL;
}

export interface ICloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}

export interface ILoadIngredientAction {
  readonly type: typeof LOAD_INGREDIENT;
  readonly ingredient: TIngredient;
}

export interface ILoadOrderAction {
  readonly type: typeof LOAD_ORDER;
  readonly order: TOrder;
}

export type TModalActions =
  | IOpenModalAction
  | ICloseModalAction
  | ILoadIngredientAction
  | ILoadOrderAction;

export const openModalAction = (): IOpenModalAction => ({
  type: OPEN_MODAL
});

export const closeModalAction = (): ICloseModalAction => ({
  type: CLOSE_MODAL
});

export const loadIngredientAction = (ingredient: TIngredient): ILoadIngredientAction => ({
  type: LOAD_INGREDIENT,
  ingredient
});

export const loadOrderAction = (order: TOrder): ILoadOrderAction => ({
  type: LOAD_ORDER,
  order
});

export const openModal: AppThunk = () => {
  return function(dispatch) {
    dispatch(openModalAction())
  }
};

export const closeModal: AppThunk = () => {
  return function(dispatch) {
    dispatch(closeModalAction());
  }
};

export const loadIngredient: AppThunk = (ingredient: TIngredient) => {
  return function(dispatch) {
    dispatch(loadIngredientAction(ingredient));
  }
};

export const loadOrder: AppThunk = (order: TOrder) => {
  return function(dispatch) {
    dispatch(loadOrderAction(order));
  }
};
