export const AuthMap = {
  LOGIN_START: "LOGIN_START",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
};

export const AuthActions = {
  loginStart: () => ({ type: AuthMap.LOGIN_START }),
  loginSuccess: (data) => ({ type: AuthMap.LOGIN_SUCCESS, payload: data }),
  loginError: (errors) => ({ type: AuthMap.LOGIN_ERROR, payload: errors }),  
};
