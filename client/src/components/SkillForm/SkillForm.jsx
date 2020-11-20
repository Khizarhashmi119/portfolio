import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addSkillAction } from "../../store/actions/skillsActions";

import "./SkillForm.css";

const SkillForm = ({ type }) => {
  const [skillData, setSkillData] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setSkillData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSkillAction(skillData));
    setSkillData("");
  };

  return (
    <form className="skill-form" onSubmit={handleSubmit}>
      <label htmlFor="skill">Skill:</label>
      <input
        className="input-skill"
        type="text"
        value={skillData}
        id="skill"
        required
        onChange={handleChange}
      />
      <button className="skill-btn" type="submit">
        {type}
      </button>
    </form>
  );
};

export default SkillForm;
