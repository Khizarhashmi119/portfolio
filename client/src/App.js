import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import changeTheme from "./utils/changeTheme";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage/ProjectDetailPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AddProjectPage from "./pages/AddProjectPage/AddProjectPage";
import UpdateProjectPage from "./pages/UpdateProjectPage/UpdateProjectPage";
import AddSkillPage from "./pages/AddSkillPage/AddSkillPage";
import Footer from "./components/Footer/Footer";
import PageNotFoundPage from "./pages/PageNotFoundPage/PageNotFoundPage";
import store from "./store/store";
import { getProjectsAction } from "./store/actions/projectsActions";
import { getSkillsAction } from "./store/actions/skillsActions";

import "./App.scss";

const App = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      changeTheme(theme);
    }

    store.dispatch(getSkillsAction());
    store.dispatch(getProjectsAction());
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage {...props} changeTheme={changeTheme} />
            )}
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
          <PrivateRoute exact path="/add-skill" component={AddSkillPage} />
          <Route component={PageNotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
