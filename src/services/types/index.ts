import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../../utils/store';
import { TAuthActions } from '../actions/auth';
import { TForgotPasswordActions } from '../actions/forgot-password';
import { TResetPasswordActions } from '../actions/reset-password';
import { TIngredientsActions } from '../actions/ingredients';
import { TConstructorActions } from '../actions/constructor';
import { TModalActions } from '../actions/modal';

type TApplicationActions =
  | TAuthActions
  | TForgotPasswordActions
  | TResetPasswordActions
  | TIngredientsActions
  | TConstructorActions
  | TModalActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
