import React, { useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ history, isAuthenticated, logout }) => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const handleClick1 = () => {
    setIsNavbarActive((prevState) => !prevState);
  };

  const handleClick2 = () => {
    logout();
    history.push("/");
  };

  return (
    <header id="header">
      <nav className="navbar">
        <Link className="logo" to="/">
          <h1>Mohd. Khizar Hashmi</h1>
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

const mapStateToProps = (state) => {
  const {
    authState: { isAuthenticated },
  } = state;

  return {
    isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch({ type: "LOGOUT" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
