import { POST_USER_REGISTER_REQUEST, POST_USER_REGISTER_SUCCESS, POST_USER_REGISTER_FAIL, POST_USER_LOGIN_REQUEST, POST_USER_LOGIN_SUCCESS, POST_USER_LOGIN_FAIL, POST_USER_LOGOUT_REQUEST, POST_USER_LOGOUT_SUCCESS, POST_USER_LOGOUT_FAIL, POST_TOKEN_REQUEST, POST_TOKEN_SUCCESS, POST_TOKEN_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL, PATCH_USER_REQUEST, PATCH_USER_SUCCESS, PATCH_USER_FAIL } from "../actions/auth";

const initialState = {
  user: null,
  isAuthenticated: false,
  registerRequest: false,
  registerFailed: false,
  loginRequest: false,
  loginFailed: false,
  logoutRequest: false,
  logoutFailed: false,
  tokenRequest: false,
  tokenFailed: false,
  userRequest: false,
  userFailed: false,
  updateUserRequest: false,
  updateUserFailed: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false
      };
    }
    case POST_USER_REGISTER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
        registerRequest: false
      };
    }
    case POST_USER_REGISTER_FAIL: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true
      };
    }
    case POST_USER_LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false
      };
    }
    case POST_USER_LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
        loginRequest: false
      };
    }
    case POST_USER_LOGIN_FAIL: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true
      };
    }
    case POST_USER_LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false
      };
    }
    case POST_USER_LOGOUT_SUCCESS: {
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        logoutRequest: false//??
      };
    }
    case POST_USER_LOGOUT_FAIL: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true
      };
    }
    case POST_TOKEN_REQUEST: {
      return {
        ...state,
        tokenRequest: true,
        tokenFailed: false
      };
    }
    case POST_TOKEN_SUCCESS: {
      return {
        ...state,
        //user: action.user,
        isAuthenticated: true,
        tokenRequest: false
      };
    }
    case POST_TOKEN_FAIL: {
      return {
        ...state,
        tokenRequest: false,
        tokenFailed: true
      };
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        userRequest: true,
        userFailed: false
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
        userRequest: false
      };
    }
    case GET_USER_FAIL: {
      return {
        ...state,
        userRequest: false,
        userFailed: true
      };
    }
    case PATCH_USER_REQUEST: {
      return {
        ...state,
        updateUserRequest: true,
        updateUserFailed: false
      };
    }
    case PATCH_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        updateUserRequest: false
      };
    }
    case PATCH_USER_FAIL: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserFailed: true
      };
    }
    default: {
      return state;
    }
  }
}
