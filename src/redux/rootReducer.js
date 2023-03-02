import { combineReducers } from "redux";
import authReducer from "../pages/Auth/redux/authReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
});
