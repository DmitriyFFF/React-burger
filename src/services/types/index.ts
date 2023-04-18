import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../../utils/store';
import { TAuthActions } from '../actions/auth';
import { TForgotPasswordActions } from '../actions/forgot-password';
import { TResetPasswordActions } from '../actions/reset-password';

type TApplicationActions =
  | TAuthActions
  | TForgotPasswordActions
  | TResetPasswordActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
