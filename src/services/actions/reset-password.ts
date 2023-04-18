import { request, baseUrl } from "../../utils/constants";
import { TUser } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";

export const RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST" = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS" = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL: "RESET_PASSWORD_FAIL" = "RESET_PASSWORD_FAIL";

export interface IResetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  readonly user: TUser;
}

export interface IResetPasswordFailAction {
  readonly type: typeof RESET_PASSWORD_FAIL;
}

export type TResetPasswordActions =
  | IResetPasswordRequestAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailAction;

export const resetPasswordRequestAction = (): IResetPasswordRequestAction => ({
  type: RESET_PASSWORD_REQUEST
});

export const resetPasswordSuccessAction = (user: TUser): IResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS,
  user
});

export const resetPasswordFailAction = (): IResetPasswordFailAction => ({
  type: RESET_PASSWORD_FAIL
});

export const postResetPassword: AppThunk = (password: string, token: string) => {
  return function(dispatch: AppDispatch) {
    dispatch(resetPasswordRequestAction());
    request(`${baseUrl}/password-reset/reset`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        password: password,
        token: token
      }),
    })
      .then(res => {
        dispatch(resetPasswordSuccessAction(res.user));
      })
      .catch(err => {
        console.log(err);
        dispatch(resetPasswordFailAction());
      });
  }
}
