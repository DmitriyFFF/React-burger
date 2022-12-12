import { ADD_INGREDIENT, DELETE_INGREDIENT, MOVE_INGREDIENT, CLEAR_INGREDIENTS } from "../actions/constructor.js";

const initialState = {
  ingredients: [],
  bun: null
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      if (action.payload.type === 'bun') {
        return {
          ...state,
          bun: action.payload
        }
      }
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: state.ingredients.filter((ingredient) => ingredient.key !== action.payload)
      };
    }
    case MOVE_INGREDIENT: {
      const ingredients = [...state.ingredients];
      [ ingredients[action.dragIndex], ingredients[action.hoverIndex] ] = [ ingredients[action.hoverIndex], ingredients[action.dragIndex] ];
      return {
        ...state,
        ingredients: ingredients
      };
    }
    case CLEAR_INGREDIENTS: {
      return {
        ...state,
        bun: null,
        ingredients: []
      }
    }
    default: {
      return state;
    }
  }
}
