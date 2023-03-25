import { getCookie } from "../../utils/constants";

export const socketMiddleware = (wsUrl, wsActions, isLoggedIn) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendOrder, onOpen, onClose, onError, onMessage } = wsActions;//order=message
      // const { user } = getState().user;
      // const token = getCookie('accessToken');
      const accessToken = window.localStorage.getItem("accessToken");
      // console.log(wsSendOrder)

      if (type === wsInit) {
        socket = new WebSocket(`${wsUrl}/all`);
        // console.log(socket)
      } else if (type === wsInit && isLoggedIn) {
        socket = new WebSocket(`${wsUrl}?token=${accessToken.split('Bearer ')[1]}`);
        // console.log(socket)
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
          const order = { ...payload, token: accessToken };
          socket.send(JSON.stringify(order));
        }
      }

      next(action);
    };
  };
};
