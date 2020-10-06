import React, { useContext, useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import axios from "axios";
import { v4 } from "uuid";

import { AuthContext } from "../../contexts/AuthContext";
import { AlertsContext } from "../../contexts/AlertsContext";
import Alert from "../../components/Alert/Alert";

const LoginPage = ({ history }) => {
  const { authState, setAuthState } = useContext(AuthContext);
  const { alerts, setAlerts } = useContext(AlertsContext);
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

    axios
      .post("/api/auth/login", {
        ...inputs,
      })
      .then((res) => {
        setAuthState({
          isLoggedIn: true,
          ...res.data,
        });

        localStorage.setItem("token", res.data.token);
        history.push("/");
      })
      .catch((err) => {
        const errors = err.response.data.errors;

        errors.forEach((error) => {
          const id = v4();
          setAlerts((prev) => {
            return [...prev, { id, msg: error.msg }];
          });

          setTimeout(
            () =>
              setAlerts((prev) => {
                return prev.filter((alert) => alert.id !== id);
              }),
            3000
          );
        });
      });
  };

  if (authState.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <main>
      <section id="login">
        <div className="container">
          <Alert alerts={alerts} />
          <h1>Login In</h1>
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

export default withRouter(LoginPage);
