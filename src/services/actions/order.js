import { request, baseUrl } from "../../utils/constants";

export const POST_ORDER_REQUEST = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAIL = "POST_ORDER_FAIL";

export function postOrder(ingredientsId) {
  return function(dispatch) {
    dispatch({
      type: POST_ORDER_REQUEST,
    });
    request(`${baseUrl}/orders`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        ingredients: ingredientsId
      }),
    })
      .then(res => {
        if (res && res.success) {
          dispatch({
            type: POST_ORDER_SUCCESS,
            order: res.order.number//???
          });
        } else {
          dispatch({
            type: POST_ORDER_FAIL
          });
        }
      })
      .catch(err => console.log(err))
  };
}