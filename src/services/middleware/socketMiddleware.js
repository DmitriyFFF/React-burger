import { getCookie } from "../../utils/constants";

export const socketMiddleware = (wsUrl, wsActions, isLoggedIn) => {
  return store => {
    let socket = null;

    return next => action => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendOrder, onOpen, onClose, onError, onMessage } = wsActions;//order=message
      // const { user } = getState().user;
      const accessToken = getCookie('token');
      // const accessToken = isLoggedIn ? `?token=${getCookie('token')?.replace('Bearer ', '')}` : '';
      // const accessToken = window.localStorage.getItem("accessToken");
      // console.log(accessToken)

      if (type === wsInit) {
				if (isLoggedIn) {
					socket = new WebSocket(`${wsUrl}?token=${accessToken.replace('Bearer ', '')}`);
          // console.log(socket)
				} else {
					socket = new WebSocket(wsUrl);
          // console.log(socket)
				}
			}

      // if (type === wsInit) {
      //   socket = new WebSocket(wsUrl);
      //   console.log(socket)
      // }
      // if (type === wsInit && isLoggedIn) {
      //   socket = new WebSocket(`${wsUrl}${accessToken}`);
      //   console.log(socket)
      // }

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
          const data = { ...payload };
          socket.send(JSON.stringify(data));
        }
      }

      next(action);
    };
  };
};
