export const AuthMap = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT_START: "LOGOUT_START",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_ERROR: "LOGOUT_ERROR",
  FORGOT_PASSWORD_START: "FORGOT_PASSWORD_START",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_ERROR: "FORGOT_PASSWORD_ERROR",
  RESET_PASSWORD_START: "RESET_PASSWORD_START",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_ERROR: "RESET_PASSWORD_ERROR",
};

export const AuthActions = {
  loginStart: () => ({ type: AuthMap.LOGIN_START }),
  loginSuccess: (data) => ({ type: AuthMap.LOGIN_SUCCESS, payload: data }),
  loginError: (errors) => ({ type: AuthMap.LOGIN_ERROR, payload: errors }), 
  logoutStart: () => ({ type: AuthMap.LOGOUT_START }),
  logoutSuccess: () => ({ type: AuthMap.LOGOUT_SUCCESS }),
  logoutError: (errors) => ({ type: AuthMap.LOGOUT_ERROR, payload: errors }),
  forgotPasswordStart: () => ({ type: AuthMap.FORGOT_PASSWORD_START }),
  forgotPasswordSuccess: () => ({ type: AuthMap.FORGOT_PASSWORD_SUCCESS }),
  forgotPasswordError: (errors) => ({ type: AuthMap.FORGOT_PASSWORD_ERROR, payload: errors }),  
  resetPasswordStart: () => ({ type: AuthMap.RESET_PASSWORD_START }),
  resetPasswordSuccess: () => ({ type: AuthMap.RESET_PASSWORD_SUCCESS }),
  resetPasswordError: (errors) => ({ type: AuthMap.RESET_PASSWORD_ERROR, payload: errors }),  
};
