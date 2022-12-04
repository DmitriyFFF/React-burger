import { ADD_INGREDIENT, DELETE_INGREDIENT } from "../actions/constructor.js";

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return {
        ...state,
        itemsRequest: true
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        itemsFailed: false,
        items: action.items,
        itemsRequest: false };
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
