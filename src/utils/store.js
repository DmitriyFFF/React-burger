import { compose, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { rootReducer } from '../services/reducers';
import { socketMiddleware } from '../services/middleware/socketMiddleware';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_OPEN,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDER,//order=message
  WS_SEND_ORDER//order=message
} from '../services/actions/wsAction';
import {
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_OPEN,
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_GET_ORDER,//order=message
  WS_AUTH_SEND_ORDER//order=message
} from '../services/actions/wsAuthAction';
import { wsUrl } from './constants';

export const wsActions = {
  wsInit: WS_CONNECTION_SUCCESS,
  onError: WS_CONNECTION_ERROR,
  onOpen: WS_CONNECTION_OPEN,
  onClose: WS_CONNECTION_CLOSED,
  onMessage: WS_GET_ORDER,
  wsSendOrder: WS_SEND_ORDER//order=message
};

export const wsAuthActions = {
  wsInit: WS_AUTH_CONNECTION_SUCCESS,
  onError: WS_AUTH_CONNECTION_ERROR,
  onOpen: WS_AUTH_CONNECTION_OPEN,
  onClose: WS_AUTH_CONNECTION_CLOSED,
  onMessage: WS_AUTH_GET_ORDER,
  wsSendOrder: WS_AUTH_SEND_ORDER//order=message
};


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions, false), socketMiddleware(wsUrl, wsAuthActions, true)));

export const store = createStore(rootReducer, enhancer);

