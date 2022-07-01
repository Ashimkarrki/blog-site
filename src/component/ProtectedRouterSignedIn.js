import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouterSignedIn = ({ isSignedIn }) => {
  return isSignedIn ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouterSignedIn;
