import { compose, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { rootReducer } from '../services/reducers';
import { socketMiddleware } from '../services/middleware/socketMiddleware';
import { wsUrl, wsAuthUrl, wsActions, wsAuthActions } from './constants';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(
  thunk,
  socketMiddleware(wsUrl, wsActions, false),
  socketMiddleware(wsAuthUrl, wsAuthActions, true)));

export const store = createStore(rootReducer, enhancer);

