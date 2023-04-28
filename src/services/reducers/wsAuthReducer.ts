import { TOrder } from '../../utils/types';
import {
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_ORDER,
  TWsAuthActions
} from '../actions/wsAuthAction';

export type TWsAuthState = {
  wsConnected: boolean;
  ordersAuth: Array<TOrder>;
  error: string | undefined;
}

const initialState: TWsAuthState = {
  wsConnected: false,
  ordersAuth: [],
  error: undefined
};

export const wsAuthReducer = (state = initialState, action: TWsAuthActions): TWsAuthState => {
  switch (action.type) {
    case WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        error: undefined
      };

    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        error: action.error
      };

    case WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        error: undefined
      };

    case WS_AUTH_GET_ORDER:
      return {
        ...state,
        ordersAuth: action.payload.orders,
        error: undefined
      };

    default:
      return state;
  }
};
