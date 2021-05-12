import React from "react";

import "./Skill.css";

const Skill = ({ skill }) => {
  return <li className="skill">#{skill.skill}</li>;
};

export default Skill;
