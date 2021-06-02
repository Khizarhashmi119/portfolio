import React from "react";
import { useSelector } from "react-redux";

import Skill from "../Skill/Skill";

import "./SkillsList.css";

const SkillsList = () => {
  const { skills, isLoading } = useSelector((state) => state.skillsState);

  return (
    <ul className="skills-list">
      {!isLoading ? (
        skills.length !== 0 ? (
          skills.map((skill) => <Skill key={skill._id} skill={skill} />)
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
