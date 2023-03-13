import { request, baseUrl } from "../../utils/constants";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAIL = "FORGOT_PASSWORD_FAIL";

export function postForgotPassword(email) {
  return function(dispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    request(`${baseUrl}/password-reset`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email
      }),
    })
      .then(res => {
        dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
          user: res.user
        });
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: FORGOT_PASSWORD_FAIL
        });
      });
  }
}
