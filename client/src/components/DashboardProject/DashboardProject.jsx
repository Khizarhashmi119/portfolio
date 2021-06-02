import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteProjectAction } from "../../redux/actions/projectsActions";

import "./DashboardProject.css";

const DashboardProject = ({ project: { _id, title }, index }) => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleClick1 = (e) => {
    e.stopPropagation();
    push(`/edit-project/${_id}`);
  };

  const handleClick2 = (e) => {
    const answer = window.confirm(
      "Do you want to delete this project permanently?"
    );
    e.stopPropagation();
    answer && dispatch(deleteProjectAction(_id));
  };

  const handleClick3 = () => {
    push(`/projects/${_id}`);
  };

  return (
    <li className="dashboard-project" onClick={handleClick3}>
      <div className="dashboard-project-title">
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

export default DashboardProject;
