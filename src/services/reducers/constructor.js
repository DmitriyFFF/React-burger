import { ADD_INGREDIENT, DELETE_INGREDIENT } from "../actions/constructor.js";

const initialState = {
  ingredients: []
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient]
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter((ingredient) => ingredient.id !== action.id)
      };
    }
    /*case GET_INGREDIENTS_FAIL: {
      return {
        ...state,
        itemsFailed: true,
        itemsRequest: false };
    }*/
    default: {
      return state;
    }
  }
}
