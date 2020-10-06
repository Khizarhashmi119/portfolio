import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ProjectsContextProvider } from "./contexts/ProjectsContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { AlertsContextProvider } from "./contexts/AlertsContext";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ProjectsContextProvider>
      <AuthContextProvider>
        <AlertsContextProvider>
          <App />
        </AlertsContextProvider>
      </AuthContextProvider>
    </ProjectsContextProvider>
  </BrowserRouter>,
  document.querySelector("#root")
);
