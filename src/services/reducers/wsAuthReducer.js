import {
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_ORDER//order=message
} from '../actions/wsAuthAction';

const initialState = {
  wsConnected: false,
  ordersAuth: [],//order=message
  error: undefined,
  // total: 0,
  // totalToday: 0
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
        wsConnected: false,
        // orders: [],
        // total: 0,
        // totalToday: 0,
      };

    case WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
        // orders: [],
        // total: 0,
        // totalToday: 0,
      };

    case WS_AUTH_GET_ORDER://order=message
      return {
        ...state,
        error: undefined,
        ordersAuth: action.payload.orders,
        // total: action.payload.total,
        // totalToday: action.payload.totalToday
        // orders: action.payload,//order=message
        // orders: [...state.orders, action.payload]
      };

    default:
      return state;
  }
};
