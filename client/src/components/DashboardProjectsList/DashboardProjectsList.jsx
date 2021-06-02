import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import DashboardProject from "../DashboardProject/DashboardProject";

import "./DashboardProjectsList.css";

const DashboardProjectsList = () => {
  const { projects, isLoading } = useSelector((state) => state.projectsState);

  return (
    <Fragment>
      {!isLoading ? (
        projects.length ? (
          <ul className="dashboard-projects-list">
            {projects.map((project, index) => (
              <DashboardProject
                key={project._id}
                project={project}
                index={index}
              />
            ))}
          </ul>
        ) : (
          <h2 className="message">No project yet.</h2>
        )
      ) : (
        <h2 className="loading-text">Loading...</h2>
      )}
    </Fragment>
  );
};

export default DashboardProjectsList;
