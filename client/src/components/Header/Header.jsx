import React, { useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Header.css";

const Header = ({ history }) => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  const handleClick1 = () => {
    setIsNavbarActive((prevState) => !prevState);
  };

  const handleClick2 = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

  return (
    <header id="header">
      <nav className="navbar">
        <Link className="logo" to="/">
          <h1>M.KH</h1>
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
          {isAuthenticated && (
            <li className="navbar-item">
              <button className="logout-button" onClick={handleClick2}>
                Logout
              </button>
            </li>
          )}
        </ul>
        <button className="navbar-button" onClick={handleClick1}>
          Menu
        </button>
      </nav>
    </header>
  );
};

export default withRouter(Header);
