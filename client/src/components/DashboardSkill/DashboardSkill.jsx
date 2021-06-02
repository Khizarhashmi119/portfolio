import React from "react";
import { useDispatch } from "react-redux";

import { deleteSkillAction } from "../../redux/actions/skillsActions";

import "./DashboardSkill.css";

const DashboardSkill = ({ skill: { _id, text } }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const answer = window.confirm(
      "Do you want to delete this skill permanently?"
    );
    answer && dispatch(deleteSkillAction(_id));
  };

  return (
    <li className="dashboard-skill">
      #{text}{" "}
      <i className="fas fa-times delete-skill-icon" onClick={handleClick}></i>
    </li>
  );
};

export default DashboardSkill;
