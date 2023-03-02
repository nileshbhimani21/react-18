import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import { PrivateRoute, AuthRoute } from "./PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route exact path="/auth" element={<AuthRoute><Auth /></AuthRoute>} />
    </Routes>
  );
};

export default MainRoutes;
