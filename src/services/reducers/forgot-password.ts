import { TUser } from "../../utils/types";
import { FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, TForgotPasswordActions } from "../actions/forgot-password";

export type TForgotPasswordState = {
  user: TUser | null;
  forgotPasswordRequest: boolean;
  forgotPasswordFailed: boolean;
}

const initialState: TForgotPasswordState = {
  user: null,
  forgotPasswordRequest: false,
  forgotPasswordFailed: false
};

export const forgotPasswordReducer = (state = initialState, action: TForgotPasswordActions): TForgotPasswordState => {
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
