import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, authState, ...otherProps }) => {
  return (
    <Route
      {...otherProps}
      render={(props) => {
        return authState.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  const { authState } = state;

  return {
    authState,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
