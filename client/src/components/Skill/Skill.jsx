import React from "react";

import "./Skill.css";

const Skill = ({ skill }) => {
  return <li className="skill">#{skill.text}</li>;
};

export default Skill;
