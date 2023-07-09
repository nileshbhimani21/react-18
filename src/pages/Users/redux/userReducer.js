import { UserMap } from "./userAction";

const initialState = {
  isLoading: false,
  users: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserMap.GET_USERS_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UserMap.GET_USERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    }
    case UserMap.GET_USERS_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case UserMap.UPDATE_USER_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case UserMap.UPDATE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case UserMap.UPDATE_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }        
    default:
      return { ...state };
  }
};
export default userReducer
