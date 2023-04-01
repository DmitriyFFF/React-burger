import { OPEN_MODAL, CLOSE_MODAL, LOAD_INGREDIENT, LOAD_ORDER } from "../actions/modal";

const initialState = {
  open: false,
  loadedIngredient: null,
  order: null
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        open: true
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        open: false
      };
    }
    case LOAD_INGREDIENT: {
      return {
        ...state,
        loadedIngredient: action.loadedIngredient
      };
    }
    case LOAD_ORDER: {
      return {
        ...state,
        order: action.order
      };
    }
    default: {
      return state;
    }
  }
}
