import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

import { logoutAdminAction } from "../../redux/actions/authActions";
import * as alertsActionTypes from "../../redux/actionTypes/alertsActionTypes";

import "./Header.css";

const Header = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  const handleClick1 = () => {
    setIsNavbarActive((prevState) => !prevState);
  };

  const handleClick2 = () => {
    const alertId = v4();

    dispatch(logoutAdminAction());

    dispatch({
      type: alertsActionTypes.ADD_ALERT,
      alert: {
        id: alertId,
        msg: "Successfully logged out.",
        type: "success",
      },
    });

    setTimeout(
      () =>
        dispatch({
          type: alertsActionTypes.DELETE_ALERT,
          id: alertId,
        }),
      5000
    );
  };

  return (
    <header id="header">
      <nav className="navbar">
        <Link to="/">
          <h1 className="logo">M.KH</h1>
        </Link>
        <ul className={`navbar-links ${isNavbarActive && "navbar-active"}`}>
          <li className="navbar-item">
            <NavLink className="navbar-link" exact to="/">
              /Home
            </NavLink>
          </li>
          {isAuthenticated && (
            <li className="navbar-item">
              <NavLink className="navbar-link" to="/dashboard">
                /Dashboard
              </NavLink>
            </li>
          )}
          <li className="navbar-item">
            <NavLink className="navbar-link" to="/projects">
              /Projects
            </NavLink>
          </li>
          {!isAuthenticated && (
            <li className="navbar-item">
              <NavLink className="navbar-link" to="/login">
                /login
              </NavLink>
            </li>
          )}
          {isAuthenticated && (
            <li className="navbar-item">
              <NavLink className="logout-button" to="" onClick={handleClick2}>
                Logout
              </NavLink>
            </li>
          )}
        </ul>
        <button className="navbar-menu-button" onClick={handleClick1}>
          Menu
        </button>
      </nav>
    </header>
  );
};

export default Header;
