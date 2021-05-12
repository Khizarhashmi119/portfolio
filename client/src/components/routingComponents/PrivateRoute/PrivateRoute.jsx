import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const { isAuthenticated } = useSelector((state) => state.authState);

  return isAuthenticated ? (
    <Route {...otherProps} component={Component} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
