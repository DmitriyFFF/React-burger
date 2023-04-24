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
  error: string | undefined;
  total: number;
  totalToday: number;
}

const initialState = {
  wsConnected: false,
  orders: [],
  error: undefined,
  total: 0,
  totalToday: 0
};

export const wsReducer = (state = initialState, action: TWsActions): TWsState => {
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
        error: action.error,
        wsConnected: false,
        total: 0,
        totalToday: 0,
        orders: []
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
        total: 0,
        totalToday: 0,
        orders: []
      };

    case WS_GET_ORDER:
      return {
        ...state,
        error: undefined,
        orders: action.orders,
        total: action.total,
        totalToday: action.totalToday
      };

    default:
      return state;
  }
};
