export const AuthMap = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT_START: "LOGOUT_START",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_ERROR: "LOGOUT_ERROR",
};

export const AuthActions = {
  loginStart: () => ({ type: AuthMap.LOGIN_START }),
  loginSuccess: (data) => ({ type: AuthMap.LOGIN_SUCCESS, payload: data }),
  loginError: (errors) => ({ type: AuthMap.LOGIN_ERROR, payload: errors }), 
  logoutStart: () => ({ type: AuthMap.LOGOUT_START }),
  logoutSuccess: () => ({ type: AuthMap.LOGOUT_SUCCESS }),
  logoutError: (errors) => ({ type: AuthMap.LOGOUT_ERROR, payload: errors }),  
};
