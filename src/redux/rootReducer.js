import { combineReducers } from "redux";
import authReducer from "../pages/Auth/redux/authReducer";
import userReducer from "../pages/Users/redux/userReducer";

 const appReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

export const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_START') {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}