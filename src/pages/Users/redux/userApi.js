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
        // toast.success(data.message)
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
export const addUserApi = (filter) => {
  return async (dispatch) => {
    try {
      dispatch(UserActions.updateUserStart());
      const data = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BACKEND_URL}users/create`,
        headers: {
          "Content-Type": "application/json",
        },
        data: filter
      });
      if (data?.status === 200) {
        toast.success(data.message)
        return dispatch(UserActions.updateUserSuccess(data.data));
      } else {
        toast.error(data.message)
        return dispatch(UserActions.updateUserError(data.message));
      }
    } catch (error) {
      toast.error(error)
      return dispatch(UserActions.updateUserError(error));
    }
  };
};
export const updateUsersApi = (filter, id) => {
  return async (dispatch) => {
    try {
      dispatch(UserActions.updateUserStart());
      const data = await axios({
        method: "PATCH",
        url: `${process.env.REACT_APP_BACKEND_URL}users/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: filter
      });
      if (data.status === 200) {
        toast.success(data.message)
        return dispatch(UserActions.updateUserSuccess(data.data));
      } else {
        toast.error(data.message)
        return dispatch(UserActions.updateUserError(data.message));
      }
    } catch (error) {
      toast.error(error)
      return dispatch(UserActions.updateUserError(error));
    }
  };
};
export const deleteUsersApi = (id) => {
  return async (dispatch) => {
    try {
      dispatch(UserActions.updateUserStart());
      const data = await axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_BACKEND_URL}users/${id}`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.status === 200) {
        toast.success(data.message)
        return dispatch(UserActions.updateUserSuccess(data.data));
      } else {
        toast.error(data.message)
        return dispatch(UserActions.updateUserError(data.message));
      }
    } catch (error) {
      toast.error(error)
      return dispatch(UserActions.updateUserError(error));
    }
  };
};
export const userRolesApi = (filter) => {
  return async (dispatch) => {
    try {
      dispatch(UserActions.getUserRolesStart());
      const data = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_BACKEND_URL}userroles`,
        headers: {
          "Content-Type": "application/json",
        },
        data: filter
      });
      if (data.status === 200) {
        return dispatch(UserActions.getUserRolesSuccess(data.data));
      } else {
        toast.error(data.message)
        return dispatch(UserActions.getUserRolesError(data.message));
      }
    } catch (error) {
      toast.error(error)
      return dispatch(UserActions.getUserRolesError(error));
    }
  };
};