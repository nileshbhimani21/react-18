import axios from "axios";
import { UserActions } from "./userAction";
import { toast } from 'react-toastify';

export const usersApi = (filter) => {
  return async (dispatch) => {
    try {
      dispatch(UserActions.getUsersStart());
      const data = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BACKEND_URL}users`,
        headers: {
          "Content-Type": "application/json",
        },
        data: filter
      });
      if (data.status === 200) {
        return dispatch(UserActions.getUsersSuccess(data.data));
      } else {
        toast.error(data.message)
        return dispatch(UserActions.getUsersError(data.message));
      }
    } catch (error) {
      toast.error(error)
      return dispatch(UserActions.getUsersError(error));
    }
  };
};