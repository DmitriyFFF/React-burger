export const WS_CONNECTION_OPEN = 'WS_CONNECTION_OPEN';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDER = 'WS_GET_ORDER';
export const WS_SEND_ORDER = 'WS_SEND_ORDER';

export const wsConnectionSuccess = () => {
  return {
    type: WS_CONNECTION_SUCCESS
  };
};

export const wsConnectionError = () => {
  return {
    type: WS_CONNECTION_ERROR
  };
};

export const wsConnectionOpen = () => {
  return {
    type: WS_CONNECTION_OPEN,
  };
};

export const wsConnectionClosed = () => {
  return {
    type: WS_CONNECTION_CLOSED
  };
};

export const wsGetOrder = (order) => {
  return {
    type: WS_GET_ORDER,
    payload: order
  };
};

export const wsSendOrder = (order) => {
  return {
    type: WS_SEND_ORDER,
    payload: order
  };
};
