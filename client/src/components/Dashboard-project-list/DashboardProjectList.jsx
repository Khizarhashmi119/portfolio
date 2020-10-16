import React, { Fragment } from "react";
import { connect } from "react-redux";

import DashboardProject from "../Dashboard-project/DashboardProject";

const DashboardProjectList = ({ projects, loading }) => {
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

const mapStateToProps = (state) => {
  const {
    projectsState: { projects, loading },
  } = state;
  return {
    projects,
    loading,
  };
};

export default connect(mapStateToProps)(DashboardProjectList);
