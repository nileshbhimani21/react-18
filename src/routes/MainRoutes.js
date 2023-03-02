import React from "react";
import { useSelector } from "react-redux";
import AuthRoute from "../pages/Auth";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = () => {
  const { isaAuthenticated } = useSelector(state => state.auth)
  return (
    isaAuthenticated ? <PrivateRoute /> : <AuthRoute />
  );
};

export default MainRoutes;
