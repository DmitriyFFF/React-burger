import {RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL} from "../actions/reset-password"

const initialState = {
  user: null,
  resetPasswordRequest: false,
  resetPasswordFailed: false
};

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordFailed: false
      };
    }
    case  RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        user: action.user,
        resetPasswordRequest: false
      };
    }
    case RESET_PASSWORD_FAIL: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true
      };
    }
    default: {
      return state;
    }
  }
}
