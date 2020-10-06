import React, { Fragment, useContext } from "react";

import DashboardProject from "../Dashboard-project/DashboardProject";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import { AuthContext } from "../../contexts/AuthContext";

const DashboardProjectList = () => {
  const { projects, setProjects } = useContext(ProjectsContext);
  const { authState } = useContext(AuthContext);

  return (
    <Fragment>
      {projects.length !== 0 ? (
        <ul className="dashboard-projects-list">
          {projects.map(({ _id, ...otherProps }, index) => (
            <DashboardProject
              key={_id}
              id={_id}
              {...otherProps}
              setProjects={setProjects}
              authState={authState}
              index={index}
            />
          ))}
        </ul>
      ) : (
        <h3 className="message">No project yet.</h3>
      )}
    </Fragment>
  );
};

export default DashboardProjectList;
