import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./components/Routes/Routes";
import changeTheme from "./utils/changeTheme";
import { setTokenAction } from "./redux/actions/authActions";
import { getProjectsAction } from "./redux/actions/projectsActions";
import { getSkillsAction } from "./redux/actions/skillsActions";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const token = localStorage.getItem("token");

    theme && changeTheme(theme);
    token && dispatch(setTokenAction(token));
    dispatch(getSkillsAction());
    dispatch(getProjectsAction());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
