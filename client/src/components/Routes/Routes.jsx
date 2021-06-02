import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import HomePage from "../../pages/HomePage/HomePage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";
import ProjectDetailPage from "../../pages/ProjectDetailPage/ProjectDetailPage";
import DashboardPage from "../../pages/DashboardPage/DashboardPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import AddProjectPage from "../../pages/AddProjectPage/AddProjectPage";
import UpdateProjectPage from "../../pages/UpdateProjectPage/UpdateProjectPage";
import PageNotFoundPage from "../../pages/PageNotFoundPage/PageNotFoundPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
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
      <Route component={PageNotFoundPage} />
    </Switch>
  );
};

export default Routes;
