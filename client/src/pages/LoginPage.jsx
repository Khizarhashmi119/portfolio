import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { authenticateAdminAction } from "../store/actions/authActions";

import Alert from "../components/Alert";

const LoginPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

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
    dispatch(authenticateAdminAction(inputs.email, inputs.password));
  };

  if (isAuthenticated) {
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

export default LoginPage;
