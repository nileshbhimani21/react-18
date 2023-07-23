import axios from "axios";
import { AuthActions } from "./authAction";
import { toast } from 'react-toastify';

export const loginApi = (req) => {
  return async (dispatch) => {
    try {
      dispatch(AuthActions.loginStart());
      const data = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BACKEND_URL}login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: req
      });
      if (data.status === 200) {
        toast.success(data.message)
        localStorage.setItem("nbTheme", JSON.stringify(data.data));
        return dispatch(AuthActions.loginSuccess(data.data));
      } else {
        toast.error(data.message)
        dispatch(AuthActions.loginError(data.message));
      }
    } catch (error) {
      toast.error(error.message)
      return dispatch(AuthActions.loginError(error.message));
    }
  };
};
export const logoutApi = () => {
  return async (dispatch) => {
    try {
      dispatch(AuthActions.logoutStart());
      const data = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}logout`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.status === 200) {
        toast.success(data.message)
        localStorage.removeItem("nbTheme");
        return dispatch(AuthActions.logoutSuccess());
      } else {
        toast.error(data.message)
        localStorage.removeItem("nbTheme");
        return dispatch(AuthActions.logoutError(data.message));
      }
    } catch (error) {
      toast.error(error)
      return dispatch(AuthActions.logoutError(error));
    }
  };
};
export const forgotPasswordApi = (req) => {
  return async (dispatch) => {
    try {
      dispatch(AuthActions.forgotPasswordStart());
      const data = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BACKEND_URL}forgotpassword`,
        headers: {
          "Content-Type": "application/json",
        },
        data: req
      });
      if (data.status === 200) {
        toast.success(data.message)
        return dispatch(AuthActions.forgotPasswordSuccess());
      } else {
        toast.error(data.message)
        return dispatch(AuthActions.forgotPasswordError(data.message));
      }
    } catch (error) {
      toast.error(error)
      return dispatch(AuthActions.forgotPasswordError(error));
    }
  };
};
export const resetPasswordApi = (req, token) => {
  return async (dispatch) => {
    try {
      dispatch(AuthActions.resetPasswordStart());
      const data = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BACKEND_URL}resetpassword/${token}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: req
      });
      if (data.status === 200) {
        toast.success(data.message)
        return dispatch(AuthActions.resetPasswordSuccess());
      } else {
        toast.error(data.message)
        return dispatch(AuthActions.resetPasswordError(data.message));
      }
    } catch (error) {
      toast.error(error)
      return dispatch(AuthActions.resetPasswordError(error));
    }
  };
};
