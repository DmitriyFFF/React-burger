import { TIngredient, TOrder } from "../../utils/types";
import { AppDispatch } from "../types";

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

export const openModal = () => {
  return function(dispatch: AppDispatch) {
    dispatch(openModalAction())
  }
};

export const closeModal = () => {
  return function(dispatch: AppDispatch) {
    dispatch(closeModalAction());
  }
};

export const loadIngredient = (ingredient: TIngredient) => {
  return function(dispatch: AppDispatch) {
    dispatch(loadIngredientAction(ingredient));
  }
};

export const loadOrder = (order: TOrder) => {
  return function(dispatch: AppDispatch) {
    dispatch(loadOrderAction(order));
  }
};
