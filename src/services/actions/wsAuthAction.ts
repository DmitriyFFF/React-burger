import { TOrder } from "../../utils/types";

export const WS_AUTH_CONNECTION_OPEN: 'WS_AUTH_CONNECTION_OPEN' = 'WS_AUTH_CONNECTION_OPEN';
export const WS_AUTH_CONNECTION_SUCCESS: 'WS_AUTH_CONNECTION_SUCCESS' = 'WS_AUTH_CONNECTION_SUCCESS';
export const WS_AUTH_CONNECTION_ERROR: 'WS_AUTH_CONNECTION_ERROR' = 'WS_AUTH_CONNECTION_ERROR';
export const WS_AUTH_CONNECTION_CLOSED: 'WS_AUTH_CONNECTION_CLOSED' = 'WS_AUTH_CONNECTION_CLOSED';
export const WS_AUTH_GET_ORDER: 'WS_AUTH_GET_ORDER' = 'WS_AUTH_GET_ORDER';
export const WS_AUTH_SEND_ORDER: 'WS_AUTH_SEND_ORDER' = 'WS_AUTH_SEND_ORDER';

export interface IWsAuthConnectionOpenAction {
  readonly type: typeof WS_AUTH_CONNECTION_OPEN;
}

export interface IWsAuthConnectionSuccessAction {
  readonly type: typeof WS_AUTH_CONNECTION_SUCCESS;
}

export interface IWsAuthConnectionErrorAction {
  readonly type: typeof WS_AUTH_CONNECTION_ERROR;
}

export interface IWsAuthConnectionClosedAction {
  readonly type: typeof WS_AUTH_CONNECTION_CLOSED;
}

export interface IWsAuthGetOrderAction {
  readonly type: typeof WS_AUTH_GET_ORDER;
  order: TOrder;
}

export interface IWsAuthSendOrderAction {
  readonly type: typeof WS_AUTH_SEND_ORDER;
  order: TOrder;
}

export type TWsAuthAction =
  | IWsAuthConnectionOpenAction
  | IWsAuthConnectionSuccessAction
  | IWsAuthConnectionErrorAction
  | IWsAuthConnectionClosedAction
  | IWsAuthGetOrderAction
  | IWsAuthSendOrderAction;

export const wsAuthConnectionSuccess = (): IWsAuthConnectionSuccessAction => {
  return {
    type: WS_AUTH_CONNECTION_SUCCESS
  };
};

export const wsAuthConnectionError = (): IWsAuthConnectionErrorAction => {
  return {
    type: WS_AUTH_CONNECTION_ERROR
  };
};

export const wsAuthConnectionOpen = (): IWsAuthConnectionOpenAction => {
  return {
    type: WS_AUTH_CONNECTION_OPEN,
  };
};

export const wsAuthConnectionClosed = (): IWsAuthConnectionClosedAction => {
  return {
    type: WS_AUTH_CONNECTION_CLOSED
  };
};

export const wsAuthGetOrder = (order: TOrder): IWsAuthGetOrderAction => {
  return {
    type: WS_AUTH_GET_ORDER,
    order
  };
};

export const wsAuthSendOrder = (order: TOrder): IWsAuthSendOrderAction => {
  return {
    type: WS_AUTH_SEND_ORDER,
    order
  };
};

