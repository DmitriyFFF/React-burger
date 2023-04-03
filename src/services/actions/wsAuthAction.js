export const WS_AUTH_CONNECTION_OPEN = 'WS_AUTH_CONNECTION_OPEN';
export const WS_AUTH_CONNECTION_SUCCESS = 'WS_AUTH_CONNECTION_SUCCESS';
export const WS_AUTH_CONNECTION_ERROR = 'WS_AUTH_CONNECTION_ERROR';
export const WS_AUTH_CONNECTION_CLOSED = 'WS_AUTH_CONNECTION_CLOSED';
export const WS_AUTH_GET_ORDER = 'WS_AUTH_GET_ORDER';
export const WS_AUTH_SEND_ORDER = 'WS_AUTH_SEND_ORDER';

export const wsAuthConnectionSuccess = () => {
  return {
    type: WS_AUTH_CONNECTION_SUCCESS
  };
};

export const wsAuthConnectionError = () => {
  return {
    type: WS_AUTH_CONNECTION_ERROR
  };
};

export const wsAuthConnectionOpen = () => {
  return {
    type: WS_AUTH_CONNECTION_OPEN,
  };
};

export const wsAuthConnectionClosed = () => {
  return {
    type: WS_AUTH_CONNECTION_CLOSED
  };
};

export const wsAuthGetOrder = (order) => {
  return {
    type: WS_AUTH_GET_ORDER,
    payload: order
  };
};

export const wsAuthSendOrder = (order) => {
  return {
    type: WS_AUTH_SEND_ORDER,
    payload: order
  };
};

