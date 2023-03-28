import { getCookie } from "../../utils/constants";

export const socketMiddleware = (wsUrl, wsActions, isLoggedIn) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendOrder, onOpen, onClose, onError, onMessage } = wsActions;
      const accessToken = getCookie('token');

      if (type === wsInit) {
				if (isLoggedIn) {
					socket = new WebSocket(`${wsUrl}?token=${accessToken.replace('Bearer ', '')}`);
				} else {
					socket = new WebSocket(wsUrl);
				}
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

        if (type === wsSendOrder) {
          const data = { ...payload };
          socket.send(JSON.stringify(data));
        }
      }

      next(action);
    };
  };
};
