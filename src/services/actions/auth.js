import { request, baseUrl, setCookie, deleteCookie, getCookie } from "../../utils/constants";

export const POST_USER_REGISTER_REQUEST = "POST_USER_REGISTER_REQUEST";
export const POST_USER_REGISTER_SUCCESS = "POST_USER_REGISTER_SUCCESS";
export const POST_USER_REGISTER_FAIL = "POST_USER_REGISTER_FAIL";

export const POST_USER_LOGIN_REQUEST = "POST_USER_LOGIN_REQUEST";
export const POST_USER_LOGIN_SUCCESS = "POST_USER_LOGIN_SUCCESS";
export const POST_USER_LOGIN_FAIL = "POST_USER_LOGIN_FAIL";

export const POST_USER_LOGOUT_REQUEST = "POST_USER_LOGOUT_REQUEST";
export const POST_USER_LOGOUT_SUCCESS = "POST_USER_LOGOUT_SUCCESS";
export const POST_USER_LOGOUT_FAIL = "POST_USER_LOGOUT_FAIL";

export const POST_TOKEN_REQUEST = "POST_TOKEN_REQUEST";
export const POST_TOKEN_SUCCESS = "POST_TOKEN_SUCCESS";
export const POST_TOKEN_FAIL = "POST_TOKEN_FAIL";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const PATCH_USER_REQUEST = "PATCH_USER_REQUEST";
export const PATCH_USER_SUCCESS = "PATCH_USER_SUCCESS";
export const PATCH_USER_FAIL = "PATCH_USER_FAIL";

export function postUserData(name, email, password) {
  return function(dispatch) {
    dispatch({
      type: POST_USER_REGISTER_REQUEST,
    });
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
      dispatch({
        type: POST_USER_REGISTER_SUCCESS,
        user: res.user
      });
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: POST_USER_REGISTER_FAIL
      });
    });
  }
}

export function postLogin(email, password) {
  return function(dispatch) {
    dispatch({
      type: POST_USER_LOGIN_REQUEST,
    });
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
      dispatch({
        type: POST_USER_LOGIN_SUCCESS,
        user: res.user
      });
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: POST_USER_LOGIN_FAIL
      });
    });
  }
}

export function postLogout() {
  return function(dispatch) {
    dispatch({
      type: POST_USER_LOGOUT_REQUEST,
    });
    request(`${baseUrl}/auth/logout`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken')
      }),
    })
    .then(res => {
      localStorage.removeItem('refreshToken');
      deleteCookie('token', res.accessToken);//???
      dispatch({
        type: POST_USER_LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: POST_USER_LOGOUT_FAIL
      });
    });
  }
}

export function postToken() {
  return function(dispatch) {
    dispatch({
      type: POST_TOKEN_REQUEST,
    });
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
      dispatch({
        type: POST_TOKEN_SUCCESS
      });
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: POST_TOKEN_FAIL
      });
    });
  }
}

export function getUserData() {
  return function(dispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    request(`${baseUrl}/auth/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('token')
      }
    })
    .then(res => {
      dispatch({
        type: GET_USER_SUCCESS,
        user: res.user
      });
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_USER_FAIL
      });
    });
  }
}

export function patchUserData(email, name) {
  return function(dispatch) {
    dispatch({
      type: PATCH_USER_REQUEST,
    });
    request(`${baseUrl}/auth/user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getCookie('token')},
      body: JSON.stringify({
        email: email,
        name: name
      }),
    })
    .then(res => {
      dispatch({
        type: PATCH_USER_SUCCESS,
        user: res.user
      });
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: PATCH_USER_FAIL
      });
    });
  }
}

