import { FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST } from "../actions/forgot-password";

const initialState = {
  user: null,
  forgotPasswordRequest: false,
  forgotPasswordFailed: false
};

export const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordFailed: false
      };
    }
    case  FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        user: action.user,
        forgotPasswordRequest: false
      };
    }
    case FORGOT_PASSWORD_FAIL: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true
      };
    }
    default: {
      return state;
    }
  }
}
