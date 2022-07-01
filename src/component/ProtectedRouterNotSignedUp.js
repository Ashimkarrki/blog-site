import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouterNotSignedUp = ({ isSignedIn }) => {
  return isSignedIn ? <Navigate to={"/"} replace={true} /> : <Outlet />;
};

export default ProtectedRouterNotSignedUp;
