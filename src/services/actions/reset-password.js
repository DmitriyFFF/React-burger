import { request, baseUrl } from "../../utils/constants";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";

export function postResetPassword(password, token) {
  return function(dispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
    request(`${baseUrl}/password-reset/reset`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        password: password,
        token: token
      }),
    })
      .then(res => {
        dispatch({
          type: RESET_PASSWORD_SUCCESS,
          user: res.user
        });
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: RESET_PASSWORD_FAIL
        });
      });
  }
}
