import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import DashboardProject from "../DashboardProject/DashboardProject";

import "./DashboardProjectsList.scss";

const DashboardProjectsList = () => {
  const { projects, loading } = useSelector((state) => state.projectsState);

  return (
    <Fragment>
      {!loading ? (
        projects.length !== 0 ? (
          <ul className="dashboard-projects-list">
            {projects.map(({ _id, ...otherProps }, index) => (
              <DashboardProject
                key={_id}
                id={_id}
                {...otherProps}
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
