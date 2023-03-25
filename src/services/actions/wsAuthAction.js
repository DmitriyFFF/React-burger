export const WS_AUTH_CONNECTION_OPEN = 'WS_AUTH_CONNECTION_OPEN';
export const WS_AUTH_CONNECTION_SUCCESS = 'WS_AUTH_CONNECTION_SUCCESS';
export const WS_AUTH_CONNECTION_ERROR = 'WS_AUTH_CONNECTION_ERROR';
export const WS_AUTH_CONNECTION_CLOSED = 'WS_AUTH_CONNECTION_CLOSED';
export const WS_AUTH_GET_ORDER = 'WS_AUTH_GET_ORDER';//order=message
export const WS_AUTH_SEND_ORDER = 'WS_AUTH_SEND_ORDER';//order=message
// export const WS_USER_NAME_UPDATE = 'WS_USER_NAME_UPDATE';//???

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

export const wsAuthGetOrder = (order) => {//order=message
  return {
    type: WS_AUTH_GET_ORDER,
    payload: order
  };
};

export const wsAuthSendOrder = (order) => {//order=message
  return {
    type: WS_AUTH_SEND_ORDER,
    payload: order
  };
};

// export const wsUserNameUpdate = userName => {
//   return {
//     type: WS_USER_NAME_UPDATE,
//     payload: userName
//   };
// };
