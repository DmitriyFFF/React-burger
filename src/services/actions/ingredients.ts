import { request, baseUrl } from "../../utils/constants";
import { TIngredient } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";

export const GET_INGREDIENTS_REQUEST: "GET_INGREDIENTS_REQUEST" = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS: "GET_INGREDIENTS_SUCCESS" = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAIL: "GET_INGREDIENTS_FAIL" = "GET_INGREDIENTS_FAIL";
export const SET_INGREDIENT_TAB: "SET_INGREDIENT_TAB" = "SET_INGREDIENT_TAB";

export interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: ReadonlyArray<TIngredient>;
}

export interface IGetIngredientsFailAction {
  readonly type: typeof GET_INGREDIENTS_FAIL;
}

export interface ISetIngredientTabAction {
  readonly type: typeof SET_INGREDIENT_TAB;
  readonly tab: string;
}

export type TIngredientsActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailAction
  | ISetIngredientTabAction;

export const getIngredientsRequest = (): IGetIngredientsRequestAction => ({
  type: GET_INGREDIENTS_REQUEST
});

export const getIngredientsSuccess = (ingredients: ReadonlyArray<TIngredient>): IGetIngredientsSuccessAction => ({
  type: GET_INGREDIENTS_SUCCESS,
  ingredients
});

export const getIngredientsFail = (): IGetIngredientsFailAction => ({
  type: GET_INGREDIENTS_FAIL
});

export const setIngredientTab = (tab: string): ISetIngredientTabAction => ({
  type: SET_INGREDIENT_TAB,
  tab
});

export const getIngredients: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch(getIngredientsRequest());
    request(`${baseUrl}/ingredients`)
      .then(res => {
        dispatch(getIngredientsSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(getIngredientsFail());
      });
  }
}
