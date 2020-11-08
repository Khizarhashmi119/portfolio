import React from "react";
import { useSelector } from "react-redux";

import Skill from "../Skill/Skill";

import "./SkillsList.scss";

const SkillsList = () => {
  const { skills, loading } = useSelector((state) => state.skillsState);

  return (
    <ul className="skills-list">
      {!loading ? (
        skills.length !== 0 ? (
          skills.map(({ _id, skill }) => <Skill key={_id} skill={skill} />)
        ) : (
          <h2 className="message">No skill yet.</h2>
        )
      ) : (
        <h2 className="loading-text">Loading....</h2>
      )}
    </ul>
  );
};

export default SkillsList;
