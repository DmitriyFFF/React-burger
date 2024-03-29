import { TOrder, TWsOrders } from "../../utils/types";

export const WS_CONNECTION_OPEN: 'WS_CONNECTION_OPEN' = 'WS_CONNECTION_OPEN';
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDER: 'WS_GET_ORDER' = 'WS_GET_ORDER';
export const WS_SEND_ORDER: 'WS_SEND_ORDER' = 'WS_SEND_ORDER';

export interface IWsConnectionOpenAction {
  readonly type: typeof WS_CONNECTION_OPEN;
}

export interface IWsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly error: string;
}

export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetOrderAction {
  readonly type: typeof WS_GET_ORDER;
  payload: TWsOrders;
}

export interface IWsSendOrderAction {
  readonly type: typeof WS_SEND_ORDER;
  order: TOrder;
}

export type TWsActions =
  | IWsConnectionOpenAction
  | IWsConnectionSuccessAction
  | IWsConnectionErrorAction
  | IWsConnectionClosedAction
  | IWsGetOrderAction
  | IWsSendOrderAction;

export const wsConnectionSuccess = (): IWsConnectionSuccessAction => {
  return {
    type: WS_CONNECTION_SUCCESS
  };
};

export const wsConnectionError = (error: string): IWsConnectionErrorAction => {
  return {
    type: WS_CONNECTION_ERROR,
    error
  };
};

export const wsConnectionOpen = (): IWsConnectionOpenAction => {
  return {
    type: WS_CONNECTION_OPEN
  };
};

export const wsConnectionClosed = (): IWsConnectionClosedAction => {
  return {
    type: WS_CONNECTION_CLOSED
  };
};

export const wsGetOrder = (payload: TWsOrders): IWsGetOrderAction => {
  return {
    type: WS_GET_ORDER,
    payload
  };
};

export const wsSendOrder = (order: TOrder): IWsSendOrderAction => {
  return {
    type: WS_SEND_ORDER,
    order
  };
};
