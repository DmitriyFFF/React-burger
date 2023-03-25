import {
  // WS_USER_NAME_UPDATE,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_ORDER//order=message
} from '../actions/wsAuthAction';

const initialState = {
  wsAuthConnected: false,
  orders: [],//order=message
  error: undefined,
  total: 0,
  totalToday: 0
};

export const wsAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsAuthConnected: true
      };

    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsAuthConnected: false,
        total: 0,
        totalToday: 0,
        orders: []
      };

    case WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsAuthConnected: false,
        total: 0,
        totalToday: 0,
        orders: []
      };

    case WS_AUTH_GET_ORDER://order=message
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
        // orders: action.payload,//order=message
        // orders: [...state.orders, action.payload]
      };
    // case WS_USER_NAME_UPDATE://????
    //   return {
    //     ...state,
    //     user: action.payload
    //   };

    default:
      return state;
  }
};
