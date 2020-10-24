import React from "react";
import { connect } from "react-redux";

import Skill from "./Skill";

const SkillList = ({ loading, skills }) => {
  return (
    <div className="skills">
      {!loading ? (
        skills.length !== 0 ? (
          skills.map(({ _id, skill }) => <Skill key={_id} skill={skill} />)
        ) : (
          <h2 className="message">No skill yet.</h2>
        )
      ) : (
        <h2 className="loading-text">Loading....</h2>
      )}
    </div>
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

export default connect(mapStateToProps)(SkillList);
