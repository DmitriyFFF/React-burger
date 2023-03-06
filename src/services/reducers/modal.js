import { OPEN_MODAL, CLOSE_MODAL, LOAD_INGREDIENT } from "../actions/modal";

const initialState = {
  open: false,
  loadedIngredient: null

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
    default: {
      return state;
    }
  }
}
