import { POST_ORDER_FAIL, POST_ORDER_REQUEST, POST_ORDER_SUCCESS, CLEAR_ORDER, /*GET_ORDERS_FAIL, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS,*/ TOrderActions } from '../actions/order';

export type TOrderState = {
  orderNumber: number | null;
  orderRequest: boolean;
  orderFailed: boolean;
};

const initialState: TOrderState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false
};

export const orderReducer = (state: TOrderState = initialState, action: TOrderActions) => {
  switch (action.type) {
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false
      };
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.orderNumber,
        orderRequest: false
      };
    }
    case POST_ORDER_FAIL: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false
      };
    }
    case CLEAR_ORDER: {
      return {
        ...state,
        orderNumber: null
      };
    }
    default: {
      return state;
    }
  }
}
