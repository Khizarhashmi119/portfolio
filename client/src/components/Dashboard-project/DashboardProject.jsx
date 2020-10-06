import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const DashboardProject = ({
  history,
  setProjects,
  authState,
  id,
  title,
  index,
}) => {
  const handleClick1 = () => {
    history.push(`/edit-project/${id}`);
  };

  const handleClick2 = () => {
    axios
      .delete(`/api/projects/${id}`, {
        headers: {
          "x-auth-token": authState.token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setProjects(res.data);
        }
      });
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

export default withRouter(DashboardProject);
