import { GET_INGREDIENTS_FAIL, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from '../actions/ingredients';

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFailed: false
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredients: action.ingredients,
        //ingredientsFailed: false,
        ingredientsRequest: false };
    }
    case GET_INGREDIENTS_FAIL: {
      return {
        ...state,
        ingredientsFailed: true,
        //ingredients: [],
        ingredientsRequest: false };
    }
    default: {
      return state;
    }
  }
}
