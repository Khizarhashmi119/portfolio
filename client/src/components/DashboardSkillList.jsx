import React, { Fragment } from "react";
import { connect } from "react-redux";

import DashboardSkill from "./DashboardSkill";

const DashboardSkillList = ({ skills, loading }) => {
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

const mapStateToProps = (state) => {
  const {
    skillsState: { skills, loading },
  } = state;

  return {
    skills,
    loading,
  };
};

export default connect(mapStateToProps)(DashboardSkillList);
