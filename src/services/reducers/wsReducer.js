import {
  // WS_USER_NAME_UPDATE,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDER//order=message
} from '../actions/wsAction';

const initialState = {
  wsConnected: false,
  orders: [],//order=message
  error: undefined
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
        // orders: []
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
        // orders: []
      };

    case WS_GET_ORDER://order=message
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders,
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
