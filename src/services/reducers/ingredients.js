import { GET_INGREDIENTS_FAIL, GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS } from '../actions/ingredients';

const initialState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        itemsRequest: true
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        itemsFailed: false,
        items: action.items,
        itemsRequest: false };
    }
    case GET_INGREDIENTS_FAIL: {
      return {
        ...state,
        itemsFailed: true,
        items: [],
        itemsRequest: false };
    }
    default: {
      return state;
    }
  }
}
