import {
  WS_USER_NAME_UPDATE,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDER//order=message
} from '../actions/wsAction';

const initialState = {
  wsConnected: false,
  orders: []//order=message
};

export const wsReducer = (state = initialState, action) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false
      };

    case WS_GET_ORDER://order=message
      return {
        ...state,
        orders: action.payload//order=message
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
