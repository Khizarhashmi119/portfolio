import React, { useContext, useState } from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

const Header = ({ history }) => {
  const { authState, setAuthState } = useContext(AuthContext);
  const [isVisisble, setIsVisible] = useState(false);

  const handleClick1 = () => {
    setIsVisible((prevState) => {
      return !prevState;
    });
  };

  const handleClick2 = () => {
    localStorage.removeItem("token");
    setAuthState({ token: null, isLoggedIn: false });
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
          {authState.isLoggedIn && (
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
          {authState.isLoggedIn && (
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
