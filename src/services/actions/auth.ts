import { request, baseUrl, setCookie, deleteCookie, getCookie } from "../../utils/constants";
import { TUser } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";

export const POST_USER_REGISTER_REQUEST: "POST_USER_REGISTER_REQUEST" = "POST_USER_REGISTER_REQUEST";
export const POST_USER_REGISTER_SUCCESS: "POST_USER_REGISTER_SUCCESS" = "POST_USER_REGISTER_SUCCESS";
export const POST_USER_REGISTER_FAIL: "POST_USER_REGISTER_FAIL" = "POST_USER_REGISTER_FAIL";

export const POST_USER_LOGIN_REQUEST: "POST_USER_LOGIN_REQUEST" = "POST_USER_LOGIN_REQUEST";
export const POST_USER_LOGIN_SUCCESS: "POST_USER_LOGIN_SUCCESS" = "POST_USER_LOGIN_SUCCESS";
export const POST_USER_LOGIN_FAIL: "POST_USER_LOGIN_FAIL" = "POST_USER_LOGIN_FAIL";

export const POST_USER_LOGOUT_REQUEST: "POST_USER_LOGOUT_REQUEST" = "POST_USER_LOGOUT_REQUEST";
export const POST_USER_LOGOUT_SUCCESS: "POST_USER_LOGOUT_SUCCESS" = "POST_USER_LOGOUT_SUCCESS";
export const POST_USER_LOGOUT_FAIL: "POST_USER_LOGOUT_FAIL" = "POST_USER_LOGOUT_FAIL";

export const POST_TOKEN_REQUEST: "POST_TOKEN_REQUEST" = "POST_TOKEN_REQUEST";
export const POST_TOKEN_SUCCESS: "POST_TOKEN_SUCCESS" = "POST_TOKEN_SUCCESS";
export const POST_TOKEN_FAIL: "POST_TOKEN_FAIL" = "POST_TOKEN_FAIL";

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_FAIL: "GET_USER_FAIL" = "GET_USER_FAIL";

export const PATCH_USER_REQUEST: "PATCH_USER_REQUEST" = "PATCH_USER_REQUEST";
export const PATCH_USER_SUCCESS: "PATCH_USER_SUCCESS" = "PATCH_USER_SUCCESS";
export const PATCH_USER_FAIL: "PATCH_USER_FAIL" = "PATCH_USER_FAIL";

export interface IPostUserRegisterRequestAction {
  readonly type: typeof POST_USER_REGISTER_REQUEST;
}

export interface IPostUserRegisterSuccessAction {
  readonly type: typeof POST_USER_REGISTER_SUCCESS;
  readonly user: TUser;
}

export interface IPostUserRegisterFailAction {
  readonly type: typeof POST_USER_REGISTER_FAIL;
}

export interface IPostUserLoginRequestAction {
  readonly type: typeof POST_USER_LOGIN_REQUEST;
}

export interface IPostUserLoginSuccessAction {
  readonly type: typeof POST_USER_LOGIN_SUCCESS;
  readonly user: TUser;
}

export interface IPostUserLoginFailAction {
  readonly type: typeof POST_USER_LOGIN_FAIL;
}

export interface IPostUserLogoutRequestAction {
  readonly type: typeof POST_USER_LOGOUT_REQUEST;
}

export interface IPostUserLogoutSuccessAction {
  readonly type: typeof POST_USER_LOGOUT_SUCCESS;
}

export interface IPostUserLogoutFailAction {
  readonly type: typeof POST_USER_LOGOUT_FAIL;
}

export interface IPostTokenRequestAction {
  readonly type: typeof POST_TOKEN_REQUEST;
}

export interface IPostTokenSuccessAction {
  readonly type: typeof POST_TOKEN_SUCCESS;
}

export interface IPostTokenFailAction {
  readonly type: typeof POST_TOKEN_FAIL;
}

export interface IGetUserRequestAction {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUser;
}

export interface IGetUserFailAction {
  readonly type: typeof GET_USER_FAIL;
}

export interface IPatchUserRequestAction {
  readonly type: typeof PATCH_USER_REQUEST;
}

export interface IPatchUserSuccessAction {
  readonly type: typeof PATCH_USER_SUCCESS;
  readonly user: TUser;
}

export interface IPatchUserFailAction {
  readonly type: typeof PATCH_USER_FAIL;
}

export type TAuthActions =
  | IPostUserRegisterRequestAction
  | IPostUserRegisterSuccessAction
  | IPostUserRegisterFailAction
  | IPostUserLoginRequestAction
  | IPostUserLoginSuccessAction
  | IPostUserLoginFailAction
  | IPostUserLogoutRequestAction
  | IPostUserLogoutSuccessAction
  | IPostUserLogoutFailAction
  | IPostTokenRequestAction
  | IPostTokenSuccessAction
  | IPostTokenFailAction
  | IGetUserRequestAction
  | IGetUserSuccessAction
  | IGetUserFailAction
  | IPatchUserRequestAction
  | IPatchUserSuccessAction
  | IPatchUserFailAction;

export const postUserRegisterRequestAction = (): IPostUserRegisterRequestAction => ({
  type: POST_USER_REGISTER_REQUEST
});

export const postUserRegisterSuccessAction = (user: TUser): IPostUserRegisterSuccessAction => ({
  type: POST_USER_REGISTER_SUCCESS,
  user
});

export const postUserRegisterFailAction = (): IPostUserRegisterFailAction => ({
  type: POST_USER_REGISTER_FAIL
});

export const postUserLoginRequestAction = (): IPostUserLoginRequestAction => ({
  type: POST_USER_LOGIN_REQUEST
});

export const postUserLoginSuccessAction = (user: TUser): IPostUserLoginSuccessAction => ({
  type: POST_USER_LOGIN_SUCCESS,
  user
});

export const postUserLoginFailAction = (): IPostUserLoginFailAction => ({
  type: POST_USER_LOGIN_FAIL
});

export const postUserLogoutRequestAction = (): IPostUserLogoutRequestAction => ({
  type: POST_USER_LOGOUT_REQUEST
});

export const postUserLogoutSuccessAction = (): IPostUserLogoutSuccessAction => ({
  type: POST_USER_LOGOUT_SUCCESS
});

export const postUserLogoutFailAction = (): IPostUserLogoutFailAction => ({
  type: POST_USER_LOGOUT_FAIL
});

export const postTokenRequestAction = (): IPostTokenRequestAction => ({
  type: POST_TOKEN_REQUEST
});

export const postTokenSuccessAction = (): IPostTokenSuccessAction => ({
  type: POST_TOKEN_SUCCESS
});

export const postTokenFailAction = (): IPostTokenFailAction => ({
  type: POST_TOKEN_FAIL
});

export const getUserRequestAction = (): IGetUserRequestAction => ({
  type: GET_USER_REQUEST
});

export const getUserSuccessAction = (user: TUser): IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS,
  user
});

export const getUserFailAction = (): IGetUserFailAction => ({
  type: GET_USER_FAIL
});

export const patchUserRequestAction = (): IPatchUserRequestAction => ({
  type: PATCH_USER_REQUEST
});

export const patchUserSuccessAction = (user: TUser): IPatchUserSuccessAction => ({
  type: PATCH_USER_SUCCESS,
  user
});

export const patchUserFailAction = (): IPatchUserFailAction => ({
  type: PATCH_USER_FAIL
});

export const postUserData: AppThunk = (name: string, email: string, password: string) => {
  return function(dispatch: AppDispatch) {
    dispatch(postUserRegisterRequestAction());
    request(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
    })
    .then(res => {
      setCookie('token', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(postUserRegisterSuccessAction(res.user));
    })
    .catch(err => {
      console.log(err);
      dispatch(postUserRegisterFailAction());
    });
  }
}

export const postLogin: AppThunk = (email: string, password: string) => {
  return function(dispatch: AppDispatch) {
    dispatch(postUserLoginRequestAction());
    request(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
    .then(res => {
      setCookie('token', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(postUserLoginSuccessAction(res.user));
    })
    .catch(err => {
      console.log(err);
      dispatch(postUserLoginFailAction());
    });
  }
}

export const postLogout: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch(postUserLogoutRequestAction());
    request(`${baseUrl}/auth/logout`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken')
      }),
    })
    .then(res => {
      localStorage.removeItem('refreshToken');
      deleteCookie('token');
      dispatch(postUserLogoutSuccessAction());
    })
    .catch(err => {
      console.log(err);
      dispatch(postUserLogoutFailAction());
    });
  }
}

export const postToken: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch(postTokenRequestAction());
    request(`${baseUrl}/auth/token`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken')
      }),
    })
    .then(res => {
      setCookie('token', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);
      dispatch(postTokenSuccessAction());
    })
    .catch(err => {
      console.log(err);
      dispatch(postTokenFailAction());
    });
  }
}

export const getUserData: AppThunk = () => {
  return function(dispatch: AppDispatch) {
    dispatch(getUserRequestAction());
    request(`${baseUrl}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('token')
      }
    })
    .then(res => {
      dispatch(getUserSuccessAction(res.user));
    })
    .catch(err => {
      console.log(err);
      dispatch(getUserFailAction());
    });
  }
}

export const patchUserData: AppThunk = (name: string, email: string) => {
  return function(dispatch: AppDispatch) {
    dispatch(patchUserRequestAction());
    request(`${baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: getCookie('token')
      },
      body: JSON.stringify({
        name: name,
        email: email
      }),
    })
    .then(res => {
      dispatch(patchUserSuccessAction(res.user));
    })
    .catch(err => {
      console.log(err);
      dispatch(patchUserFailAction());
    });
  }
}

