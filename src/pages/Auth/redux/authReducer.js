import { AuthMap } from "./authAction";

const initialState = {
  isLoading: false,
  user: localStorage.getItem("nbTheme") ? JSON.parse(localStorage.getItem("nbTheme")) : null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthMap.LOGIN_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthMap.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    }
    case AuthMap.LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case AuthMap.LOGOUT_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthMap.LOGOUT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: null,
      };
    }
    case AuthMap.LOGOUT_ERROR: {
      return {
        ...state,
        isLoading: false,
        user: null,
      };
    }
    case AuthMap.FORGOT_PASSWORD_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthMap.FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case AuthMap.FORGOT_PASSWORD_ERROR: {
      return {
        ...state,
        isLoading: false,
        user: null,
      };
    }
    case AuthMap.RESET_PASSWORD_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthMap.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case AuthMap.RESET_PASSWORD_ERROR: {
      return {
        ...state,
        isLoading: false,
        user: null,
      };
    }
    default:
      return { ...state };
  }
};
export default authReducer
