import { request, baseUrl } from "../../utils/constants";

export const POST_USER_REGISTER_REQUEST = "POST_USERDATA_REQUEST";
export const POST_USER_REGISTER_SUCCESS = "POST_USERDATA_SUCCESS";
export const POST_USER_REGISTER_FAIL = "POST_USERDATA_FAIL";

export const POST_USER_LOGIN_REQUEST = "POST_USERDATA_REQUEST";
export const POST_USER_LOGIN_SUCCESS = "POST_USERDATA_SUCCESS";
export const POST_USER_LOGIN_FAIL = "POST_USERDATA_FAIL";

export const POST_USER_LOGOUT_REQUEST = "POST_USERDATA_REQUEST";
export const POST_USER_LOGOUT_SUCCESS = "POST_USERDATA_SUCCESS";
export const POST_USER_LOGOUT_FAIL = "POST_USERDATA_FAIL";

export const POST_TOKEN_REQUEST = "POST_USERDATA_REQUEST";
export const POST_TOKEN_SUCCESS = "POST_USERDATA_SUCCESS";
export const POST_TOKEN_FAIL = "POST_USERDATA_FAIL";

export function postUserData(email, password, name) {//???
  return function(dispatch) {
    dispatch({
      type: POST_USER_REGISTER_REQUEST,
    });
    request(`${baseUrl}/auth/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      }),
    })
      .then(res => {
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

export function postLogin(email, password) {//???
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

export function postLogout(token) {//???
  return function(dispatch) {
    dispatch({
      type: POST_USER_LOGOUT_REQUEST,
    });
    request(`${baseUrl}/auth/logout`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        token: "refreshToken"//????
      }),
    })
      .then(res => {
        dispatch({
          type: POST_USER_LOGOUT_SUCCESS,
          user: res.user
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

export function postToken(token) {//???
  return function(dispatch) {
    dispatch({
      type: POST_TOKEN_REQUEST,
    });
    request(`${baseUrl}/auth/token`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        token: token
      }),
    })
      .then(res => {
        dispatch({
          type: POST_TOKEN_SUCCESS,
          user: res.user
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

