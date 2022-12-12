import { request, baseUrl } from "../../utils/constants";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAIL = "GET_INGREDIENTS_FAIL";
export const SET_INGREDIENT_TAB = "SET_INGREDIENT_TAB";

export function getIngredients() {
  return function(dispatch) {
    dispatch({
      type: GET_INGREDIENTS_REQUEST
    });
    request(`${baseUrl}/ingredients`)
      .then(res => {
        dispatch({
          type: GET_INGREDIENTS_SUCCESS,
          ingredients: res.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: GET_INGREDIENTS_FAIL
        });
      });
  }
}
