import { request, baseUrl, getCookie } from "../../utils/constants";
import { TIngredient } from "../../utils/types";
import { AppThunk } from "../types";

export const POST_ORDER_REQUEST: "POST_ORDER_REQUEST" = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS: "POST_ORDER_SUCCESS" = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAIL: "POST_ORDER_FAIL" = "POST_ORDER_FAIL";

export const CLEAR_ORDER: "CLEAR_ORDER" = "CLEAR_ORDER";

export interface IPostOrderRequestAction {
  readonly type: typeof POST_ORDER_REQUEST;
}

export interface IPostOrderSuccessAction {
  readonly type: typeof POST_ORDER_SUCCESS;
  readonly orderNumber: number;
}

export interface IPostOrderFailAction {
  readonly type: typeof POST_ORDER_FAIL;
}

export interface IClearOrderAction {
  readonly type: typeof CLEAR_ORDER;
}

export type TOrderActions =
  | IPostOrderRequestAction
  | IPostOrderSuccessAction
  | IPostOrderFailAction
  | IClearOrderAction;

export const postOrderRequestAction = (): IPostOrderRequestAction => ({
  type: POST_ORDER_REQUEST
});

export const postOrderSuccessAction = (orderNumber: number): IPostOrderSuccessAction => ({
  type: POST_ORDER_SUCCESS,
  orderNumber
});

export const postOrderFailAction = (): IPostOrderFailAction => ({
  type: POST_ORDER_FAIL
});

export const clearOrder = (): IClearOrderAction => ({
  type: CLEAR_ORDER
});

export const postOrder: AppThunk = (ingredients: Array<TIngredient>) => {
  return function(dispatch) {
    dispatch(postOrderRequestAction());
    request(`${baseUrl}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('token')
      },
      body: JSON.stringify({
        ingredients: ingredients
      }),
    })
    .then(res => {
      dispatch(postOrderSuccessAction(res.order.number));
    })
    .catch(err => {
      console.log(err)
      dispatch(postOrderFailAction());
    });
  }
};

