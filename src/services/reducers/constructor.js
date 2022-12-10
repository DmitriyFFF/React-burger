import { ADD_INGREDIENT, DELETE_INGREDIENT, ADD_BUN } from "../actions/constructor.js";

const initialState = {
  ingredients: [],
  bun: {}
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.ingredient],
        id: action.id
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients].filter((ingredient) => ingredient.id !== action.id)
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        bun: [...state.bun, action.bun],
        id: action.id
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
