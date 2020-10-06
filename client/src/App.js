import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import changeTheme from "./utils/changeTheme";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/Home-page/HomePage";
import ProjectsPage from "./pages/Projects-page/ProjectsPage";
import ProjectDetailPage from "./pages/Project-detail-page/ProjectDetailPage";
import DashboardPage from "./pages/Dashboard-page/DashboardPage";
import LoginPage from "./pages/Login-page/LoginPage";
import AddProjectPage from "./pages/Add-project-page/AddProjectPage";
import UpdateProjectPage from "./pages/Update-project-page/UpdateProjectPage";
import Footer from "./components/Footer/Footer";

import "./App.scss";

const App = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      changeTheme(theme);
    }
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <HomePage {...props} changeTheme={changeTheme} />}
        />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/projects/:id" component={ProjectDetailPage} />
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <PrivateRoute exact path="/add-project" component={AddProjectPage} />
        <PrivateRoute
          exact
          path="/edit-project/:id"
          component={UpdateProjectPage}
        />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
