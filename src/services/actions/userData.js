import { request, baseUrl } from "../../utils/constants";

export const POST_USERDATA_REQUEST = "POST_USERDATA_REQUEST";
export const POST_USERDATA_SUCCESS = "POST_USERDATA_SUCCESS";
export const POST_USERDATA_FAIL = "POST_USERDATA_FAIL";

export function postUserData(email, password, name) {//???
  return function(dispatch) {
    dispatch({
      type: POST_USERDATA_REQUEST,
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
          type: POST_USERDATA_SUCCESS,
          user: res.user
        });
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: POST_USERDATA_FAIL
        });
      });
  }
}

