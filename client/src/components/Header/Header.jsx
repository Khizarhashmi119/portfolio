import React, { useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ history, authState, logout }) => {
  const [isVisisble, setIsVisible] = useState(false);

  const handleClick1 = () => {
    setIsVisible((prevState) => {
      return !prevState;
    });
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
        <ul className="navbar-links" style={{ display: isVisisble && "flex" }}>
          <li className="navbar-item">
            <NavLink className="navbar-link" exact to="/">
              /Home
            </NavLink>
          </li>
          {authState.isAuthenticated && (
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
          {authState.isAuthenticated && (
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
  const { authState } = state;

  return {
    authState,
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
