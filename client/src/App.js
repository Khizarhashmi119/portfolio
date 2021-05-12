import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import changeTheme from "./utils/changeTheme";
import Header from "./components/layoutComponents/Header/Header";
import Footer from "./components/layoutComponents/Footer/Footer";
import Routes from "./components/routingComponents/Routes/Routes";
import { getProjectsAction } from "./redux/actions/projectsActions";
import { getSkillsAction } from "./redux/actions/skillsActions";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      changeTheme(theme);
    }

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
