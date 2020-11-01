import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import DashboardProject from "./DashboardProject";

const DashboardProjectList = () => {
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
          <h3 className="message">No project yet.</h3>
        )
      ) : (
        <h3>Loading...</h3>
      )}
    </Fragment>
  );
};

export default DashboardProjectList;
