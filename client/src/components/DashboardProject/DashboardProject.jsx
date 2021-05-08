import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteProjectAction } from "../../redux/actions/projectsActions";

import "./DashboardProject.css";

const DashboardProject = ({ history, id, title, index }) => {
  const dispatch = useDispatch();

  const handleClick1 = () => {
    history.push(`/edit-project/${id}`);
  };

  const handleClick2 = () => {
    dispatch(deleteProjectAction(id));
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
        <button className="dashboard-delete-project-btn" onClick={handleClick2}>
          <i className="fas fa-trash"></i>
        </button>
        <button className="dashboard-update-project-btn" onClick={handleClick1}>
          <i className="fas fa-pencil-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default withRouter(DashboardProject);
