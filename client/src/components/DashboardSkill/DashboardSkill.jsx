import React from "react";
import { useDispatch } from "react-redux";

import { deleteSkillAction } from "../../store/actions/skillsActions";

import "./DashboardSkill.css";

const DashboardSkill = ({ id, skill }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteSkillAction(id));
  };

  return (
    <li className="dashboard-skill">
      #{skill}{" "}
      <i className="fas fa-times delete-skill-icon" onClick={handleClick}></i>
    </li>
  );
};

export default DashboardSkill;
