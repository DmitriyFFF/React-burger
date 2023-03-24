import { POST_ORDER_FAIL, POST_ORDER_REQUEST, POST_ORDER_SUCCESS, CLEAR_ORDER, GET_ORDERS_FAIL, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from '../actions/order';

const initialState = {
  orders: [],
  order: null,
  orderRequest: false,
  orderFailed: false,
  getOrdersRequest: false,
  getOrdersFailed: false
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
    case GET_ORDERS_REQUEST: {
      return {
        ...state,
        getOrdersRequest: true
      };
    }
    case GET_ORDERS_SUCCESS: {
      return {
        ...state,
        orders: action.orders,
        getOrdersFailed: false,
        getOrdersRequest: false
      };
    }
    case GET_ORDERS_FAIL: {
      return {
        ...state,
        orders: [],
        getOrdersFailed: true,
        getOrdersRequest: false
      };
    }
    default: {
      return state;
    }
  }
}
