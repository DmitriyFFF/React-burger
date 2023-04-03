import {
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_ORDER
} from '../actions/wsAuthAction';

const initialState = {
  wsConnected: false,
  ordersAuth: [],
  error: undefined
};

export const wsAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    case WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    case WS_AUTH_GET_ORDER:
      return {
        ...state,
        error: undefined,
        ordersAuth: action.payload.orders
      };

    default:
      return state;
  }
};
