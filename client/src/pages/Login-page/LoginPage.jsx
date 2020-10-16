import React, { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { authenticateAdminAction } from "../../store/actions/authActions";

import Alert from "../../components/Alert/Alert";

const LoginPage = ({ history, authState, authenticateAdmin }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateAdmin(inputs.email, inputs.password);
    history.push("/dashboard");
  };

  if (authState.isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <main>
      <section id="login">
        <div className="container">
          <h1>Login In</h1>
          <Alert />
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              className="login-input-email"
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              className="login-input-password"
              type="password"
              name="password"
              id="password"
              required
              onChange={handleChange}
            />
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  const { authState } = state;

  return {
    authState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateAdmin: (email, password) => {
      dispatch(authenticateAdminAction(email, password));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginPage));
