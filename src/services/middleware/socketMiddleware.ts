import { getCookie } from "../../utils/constants";
import { TWsMiddleware } from "../../utils/types";
import { Middleware, MiddlewareAPI } from "redux";


export const socketMiddleware = (wsUrl: string, wsActions: TWsMiddleware, withToken: boolean): Middleware => {
  return (store: MiddlewareAPI) => {
    let socket: WebSocket | null = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendOrder, onOpen, onClose, onError, onMessage } = wsActions;
      const accessToken = getCookie('token');

      if (type === wsInit) {
				if (withToken) {
					socket = new WebSocket(`${wsUrl}?token=${accessToken?.replace('Bearer ', '')}`);
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
