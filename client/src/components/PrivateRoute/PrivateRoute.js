import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const { authState } = useContext(AuthContext);

  return (
    <Route
      {...otherProps}
      render={(props) => {
        return authState.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

export default PrivateRoute;
