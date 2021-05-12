import React from "react";
import { useDispatch } from "react-redux";

import { deleteSkillAction } from "../../../redux/actions/skillsActions";

import "./DashboardSkill.css";

const DashboardSkill = ({ skill: { _id, skill } }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteSkillAction(_id));
  };

  return (
    <li className="dashboard-skill">
      #{skill}{" "}
      <i className="fas fa-times delete-skill-icon" onClick={handleClick}></i>
    </li>
  );
};

export default DashboardSkill;
