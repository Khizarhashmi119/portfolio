import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { deleteProjectAction } from "../../store/actions/projectsAction";

const DashboardProject = ({ history, id, title, index, deleteProject }) => {
  const handleClick1 = () => {
    history.push(`/edit-project/${id}`);
  };

  const handleClick2 = () => {
    deleteProject(id);
  };

  const handleClick3 = () => {
    history.push(`/projects/${id}`);
  };

  return (
    <li className="dashboard-project">
      <div className="dashboard-project-title" onClick={handleClick3}>
        <span className="counter">{index + 1}.</span>
        {title}
      </div>
      <div className="dashboard-project-btns">
        <button className="dashboard-delete-btn" onClick={handleClick2}>
          <i className="fas fa-trash"></i>
        </button>
        <button className="dashboard-update-btn" onClick={handleClick1}>
          <i className="fas fa-pencil-alt"></i>
        </button>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (id) => {
      dispatch(deleteProjectAction(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(DashboardProject));
