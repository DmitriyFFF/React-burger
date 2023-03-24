import { compose, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { rootReducer } from '../services/reducers';
import { socketMiddleware } from '../services/middleware/socketMiddleware';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDER,//order=message
  WS_SEND_ORDER//order=message
} from '../services/actions/wsAction';
import { wsUrl } from './constants';

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendOrder: WS_SEND_ORDER,//order=message
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ORDER
};


const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsActions)));

export const store = createStore(rootReducer, enhancer);

