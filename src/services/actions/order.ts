import { request, baseUrl, getCookie } from "../../utils/constants";
import { TIngredient, TOrder } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";

export const POST_ORDER_REQUEST: "POST_ORDER_REQUEST" = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS: "POST_ORDER_SUCCESS" = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAIL: "POST_ORDER_FAIL" = "POST_ORDER_FAIL";

export const GET_ORDERS_REQUEST: "GET_ORDERS_REQUEST" = "GET_ORDERS_REQUEST";
export const GET_ORDERS_SUCCESS: "GET_ORDERS_SUCCESS" = "GET_ORDERS_SUCCESS";
export const GET_ORDERS_FAIL: "GET_ORDERS_FAIL" = "GET_ORDERS_FAIL";

export const CLEAR_ORDER: "CLEAR_ORDER" = "CLEAR_ORDER";

export interface IPostOrderRequestAction {
  readonly type: typeof POST_ORDER_REQUEST;
}

export interface IPostOrderSuccessAction {
  readonly type: typeof POST_ORDER_SUCCESS;
  order: TOrder;
}

export interface IPostOrderFailAction {
  readonly type: typeof POST_ORDER_FAIL;
}

export interface IGetOrdersRequestAction {
  readonly type: typeof GET_ORDERS_REQUEST;
}

export interface IGetOrdersSuccessAction {
  readonly type: typeof GET_ORDERS_SUCCESS;
  orders: Array<TOrder>;
  order: TOrder;
}

export interface IGetOrdersFailAction {
  readonly type: typeof GET_ORDERS_FAIL;
}

export interface IClearOrderAction {
  readonly type: typeof CLEAR_ORDER;
}

export type TOrderActions =
  | IPostOrderRequestAction
  | IPostOrderSuccessAction
  | IPostOrderFailAction
  | IGetOrdersRequestAction
  | IGetOrdersSuccessAction
  | IGetOrdersFailAction
  | IClearOrderAction;

export const postOrderRequestAction = (): IPostOrderRequestAction => ({
  type: POST_ORDER_REQUEST
});

export const postOrderSuccessAction = (order: TOrder): IPostOrderSuccessAction => ({
  type: POST_ORDER_SUCCESS,
  order
});

export const postOrderFailAction = (): IPostOrderFailAction => ({
  type: POST_ORDER_FAIL
});

// export const getOrdersRequestAction = (): IGetOrdersRequestAction => ({
//   type: GET_ORDERS_REQUEST
// });

// export const getOrdersSuccessAction = (): IGetOrdersSuccessAction => ({
//   type: GET_ORDERS_SUCCESS,
//   orders,
//   order
// });

// export const getOrdersFailAction = (): IGetOrdersFailAction => ({
//   type: GET_ORDERS_FAIL
// });

export const clearOrder = (): IClearOrderAction => ({
  type: CLEAR_ORDER
});

export const postOrder: AppThunk = (ingredients: Array<TIngredient>) => {
  return function(dispatch: AppDispatch) {
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

// export const getOrders: AppThunk = () => {
//   return function(dispatch: AppDispatch) {
//     dispatch({
//       type: GET_ORDERS_REQUEST,
//     });
//     request(`${baseUrl}/orders/all`, {
//       method: 'GET',
//       headers: {'Content-Type': 'application/json'}
//     })
//     .then(res => {
//       dispatch({
//         type: GET_ORDERS_SUCCESS,
//         orders: res.orders,
//         order: res.order
//       });
//     })
//     .catch(err => {
//       console.log(err)
//       dispatch({
//         type: GET_ORDERS_FAIL
//       });
//     });
//   }
// }
