import { TIngredient, TOrder } from "../../utils/types";
import { OPEN_MODAL, CLOSE_MODAL, LOAD_INGREDIENT, LOAD_ORDER, TModalActions } from "../actions/modal";

export type TModalState = {
  open: boolean;
  loadedIngredient: TIngredient | null;
  order: TOrder | null;
}

const initialState: TModalState = {
  open: false,
  loadedIngredient: null,
  order: null
};

export const modalReducer = (state = initialState, action: TModalActions): TModalState => {
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
        loadedIngredient: action.ingredient
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
