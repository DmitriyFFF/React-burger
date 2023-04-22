import { TOrder } from '../../utils/types';
import { POST_ORDER_FAIL, POST_ORDER_REQUEST, POST_ORDER_SUCCESS, CLEAR_ORDER, GET_ORDERS_FAIL, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, TOrderActions } from '../actions/order';

export type TOrderState = {
  orders: Array<TOrder>;
  order: TOrder | null;
  orderRequest: boolean;
  orderFailed: boolean;
  getOrdersRequest: boolean;
  getOrdersFailed: boolean;
}

const initialState = {
  orders: [],
  order: null,
  orderRequest: false,
  orderFailed: false,
  getOrdersRequest: false,
  getOrdersFailed: false
};

export const orderReducer = (state = initialState, action: TOrderActions): TOrderState => {
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
        order: action.order,
        // orders: action.orders,
        orderFailed: false,
        orderRequest: false
      };
    }
    case POST_ORDER_FAIL: {
      return {
        ...state,
        order: null,
        // orders: [],
        orderFailed: true,
        orderRequest: false
      };
    }
    case CLEAR_ORDER: {
      return {
        ...state,
        order: null,
        orders: []
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