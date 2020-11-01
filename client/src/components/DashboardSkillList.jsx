import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import DashboardSkill from "./DashboardSkill";

const DashboardSkillList = () => {
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
          <h3 className="message">No skill yet.</h3>
        )
      ) : (
        <h3>Loading...</h3>
      )}
    </Fragment>
  );
};

export default DashboardSkillList;
