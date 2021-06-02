import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import DashboardSkill from "../DashboardSkill/DashboardSkill";

import "./DashboardSkillsList.css";

const DashboardSkillsList = () => {
  const { skills, isLoading } = useSelector((state) => state.skillsState);

  return (
    <Fragment>
      {!isLoading ? (
        skills.length !== 0 ? (
          <ul className="dashboard-skills-list">
            {skills.map((skill) => (
              <DashboardSkill key={skill._id} skill={skill} />
            ))}
          </ul>
        ) : (
          <h2 className="message">No skill yet.</h2>
        )
      ) : (
        <h2 className="loading-text">Loading...</h2>
      )}
    </Fragment>
  );
};

export default DashboardSkillsList;
