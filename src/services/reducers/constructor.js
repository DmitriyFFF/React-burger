import { ADD_INGREDIENT, DELETE_INGREDIENT } from "../actions/constructor.js";

const initialState = {
  items: []
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        items: [...state.items, action.item]
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        items: [...state.items].filter((item) => item.id !== action.id)
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
