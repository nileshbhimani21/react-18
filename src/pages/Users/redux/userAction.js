export const UserMap = {
  GET_USERS_START: "GET_USERS_START",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USERS_ERROR: "GET_USERS_ERROR", 
};

export const UserActions = {
  getUsersStart: () => ({ type: UserMap.GET_USERS_START }),
  getUsersSuccess: (data) => ({ type: UserMap.GET_USERS_SUCCESS, payload: data }),
  getUsersError: (errors) => ({ type: UserMap.GET_USERS_ERROR, payload: errors }), 
};
