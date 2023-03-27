import { request, baseUrl, getCookie } from "../../utils/constants";

export const POST_ORDER_REQUEST = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAIL = "POST_ORDER_FAIL";

export const GET_ORDERS_REQUEST = "GET_ORDERS_REQUEST";
export const GET_ORDERS_SUCCESS = "GET_ORDERS_SUCCESS";
export const GET_ORDERS_FAIL = "GET_ORDERS_FAIL";

export const CLEAR_ORDER = "CLEAR_ORDER"

export function postOrder(ingredients) {
  return function(dispatch) {
    dispatch({
      type: POST_ORDER_REQUEST,
    });
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
      dispatch({
        type: POST_ORDER_SUCCESS,
        order: res.order.number,
        // orders: res.orders
      });
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: POST_ORDER_FAIL
      });
    });
  }
};

export function getOrders() {
  return function(dispatch) {
    dispatch({
      type: GET_ORDERS_REQUEST,
    });
    request(`${baseUrl}/orders/all`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      dispatch({
        type: GET_ORDERS_SUCCESS,
        orders: res.orders,
        order: res.order
      });
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_ORDERS_FAIL
      });
    });
  }
}
