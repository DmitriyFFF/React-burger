import { getCookie } from "../../utils/constants";

export const socketMiddleware = (wsUrl, wsActions) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendOrder, onOpen, onClose, onError, onMessage } = wsActions;//order=message
      // const { user } = getState().user;
      const token = getCookie('accessToken');

      if (type === wsInit && token) {
        socket = new WebSocket(`${wsUrl}?token=${token}`);
        console.log(socket.readyState)
      } else if (type === wsInit /*&& !token*/) {
        socket = new WebSocket(wsUrl);
      }
      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = event => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = event => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendOrder) {//order=message
          const order = { ...payload, token: token };
          socket.send(JSON.stringify(order));
        }
      }

      next(action);
    };
  };
};
