import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Alerts from "../../components/Alerts/Alerts";
import { loginAdminAction } from "../../redux/actions/authActions";

import "./LoginPage.css";

const LoginPage = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const { isAuthenticated, isLoading } = useSelector(
    (state) => state.authState
  );
  const dispatch = useDispatch();
  const { email, password } = loginFormData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdminAction(email, password));
  };

  return !isAuthenticated ? (
    <main>
      <section id="login">
        <div className="container">
          <h1 className="login-title">Login In</h1>
          <Alerts />
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="login-input-email"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              className="login-input-password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <button className="login-btn" type="submit">
              {!isLoading ? "Login" : "Loading..."}
            </button>
          </form>
        </div>
      </section>
    </main>
  ) : (
    <Redirect to="/dashboard" />
  );
};

export default LoginPage;
