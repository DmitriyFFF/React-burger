import { POST_ORDER_FAIL, POST_ORDER_REQUEST, POST_ORDER_SUCCESS, CLEAR_ORDER } from '../actions/order';

const initialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true
      };
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        orderFailed: false,
        order: action.order,
        orderRequest: false
      };
    }
    case POST_ORDER_FAIL: {
      return {
        ...state,
        orderFailed: true,
        order: null,
        orderRequest: false
      };
    }
    case CLEAR_ORDER: {
      return {
        ...state,
        order: null
      };
    }
    default: {
      return state;
    }
  }
}
