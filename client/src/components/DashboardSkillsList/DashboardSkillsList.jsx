import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import DashboardSkill from "../DashboardSkill/DashboardSkill";

import "./DashboardSkillsList.scss";

const DashboardSkillsList = () => {
  const { skills, loading } = useSelector((state) => state.skillsState);

  return (
    <Fragment>
      {!loading ? (
        skills.length !== 0 ? (
          <ul className="dashboard-skills-list">
            {skills.map(({ _id, ...otherProps }) => (
              <DashboardSkill key={_id} id={_id} {...otherProps} />
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
