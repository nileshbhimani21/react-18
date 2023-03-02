import axios from "axios";
import { AuthActions } from "./authAction";
import { toast } from 'react-toastify';

export const authenticate = (req) => {
  return async (dispatch) => {
    try {
      dispatch(AuthActions.loginStart());
      const data = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/authenticate`,
        headers: {
          "Content-Type": "application/json",
        },
        data: req
      });
      if (data.code === 200) {
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
