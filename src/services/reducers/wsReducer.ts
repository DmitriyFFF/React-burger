import { TOrder } from '../../utils/types';
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDER,
  TWsActions
} from '../actions/wsAction';

export type TWsState = {
  wsConnected: boolean;
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
  error: string | undefined;
}

const initialState: TWsState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
  error: undefined
};

export const wsReducer = (state = initialState, action: TWsActions): TWsState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
        error: undefined
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
        error: action.error,
        // total: 0,
        // totalToday: 0,
        // orders: []
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
        error: undefined
        // total: 0,
        // totalToday: 0,
        // orders: []
      };

    case WS_GET_ORDER:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
        error: undefined
      };

    default:
      return state;
  }
};
