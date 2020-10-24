import React from "react";
import { connect } from "react-redux";

import { deleteSkillAction } from "../store/actions/skillsActions";

const DashboardSkill = ({ id, skill, deleteSkill }) => {
  const handleClick = () => {
    deleteSkill(id);
  };

  return (
    <li className="dashboard-skill">
      #{skill}{" "}
      <i className="fas fa-times delete-skill-icon" onClick={handleClick}></i>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSkill: (id) => {
      dispatch(deleteSkillAction(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(DashboardSkill);
