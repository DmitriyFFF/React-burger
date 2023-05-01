import { request, baseUrl } from "../../utils/constants";
import { TUser } from "../../utils/types";
import { AppThunk } from "../types";

export const FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST" = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS" = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAIL: "FORGOT_PASSWORD_FAIL" = "FORGOT_PASSWORD_FAIL";

export interface IForgotPasswordRequestAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
  readonly user: TUser;
}

export interface IForgotPasswordFailAction {
  readonly type: typeof FORGOT_PASSWORD_FAIL;
}

export type TForgotPasswordActions =
  | IForgotPasswordRequestAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailAction;

export const forgotPasswordRequestAction = (): IForgotPasswordRequestAction => ({
  type: FORGOT_PASSWORD_REQUEST
});

export const forgotPasswordSuccessAction = (user: TUser): IForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS,
  user
});

export const forgotPasswordFailAction = (): IForgotPasswordFailAction => ({
  type: FORGOT_PASSWORD_FAIL
});

export const postForgotPassword: AppThunk = (email: string) => {
  return function(dispatch) {
    dispatch(forgotPasswordRequestAction());
    request(`${baseUrl}/password-reset`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email
      }),
    })
      .then(res => {
        dispatch(forgotPasswordSuccessAction(res.user));
      })
      .catch(err => {
        console.log(err);
        dispatch(forgotPasswordFailAction());
      });
  }
}
