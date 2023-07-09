export const UserMap = {
  GET_USERS_START: "GET_USERS_START",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USERS_ERROR: "GET_USERS_ERROR", 
  UPDATE_USER_START: "UPDATE_USER_START",
  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
  UPDATE_USER_ERROR: "UPDATE_USER_ERROR", 
};

export const UserActions = {
  getUsersStart: () => ({ type: UserMap.GET_USERS_START }),
  getUsersSuccess: (data) => ({ type: UserMap.GET_USERS_SUCCESS, payload: data }),
  getUsersError: (errors) => ({ type: UserMap.GET_USERS_ERROR, payload: errors }), 
  updateUserStart: () => ({ type: UserMap.UPDATE_USER_START }),
  updateUserSuccess: (data) => ({ type: UserMap.UPDATE_USER_SUCCESS, payload: data }),
  updateUserError: (errors) => ({ type: UserMap.UPDATE_USER_ERROR, payload: errors }), 
};
