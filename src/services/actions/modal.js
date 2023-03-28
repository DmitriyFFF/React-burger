export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const LOAD_INGREDIENT = 'LOAD_INGREDIENT';
export const LOAD_ORDER = 'LOAD_ORDER';

export const openModal = () => {
  return function(dispatch) {
    dispatch({
      type: OPEN_MODAL
    })
  }
};

export const closeModal = () => {
  return function(dispatch) {
    dispatch({
      type: CLOSE_MODAL
    })
  }
}

export const loadIngredient = (ingredient) => {
  return function(dispatch) {
    dispatch({
      type: LOAD_INGREDIENT,
      loadedIngredient: ingredient
    })
  }
}

export const loadOrder = (order) => {
  return function(dispatch) {
    dispatch({
      type: LOAD_ORDER,
      loadedOrder: order
    })
  }
}
