import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addSkillAction } from "../../redux/actions/skillsActions";

import "./SkillForm.css";

const SkillForm = () => {
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
      <input
        className="input-skill"
        type="text"
        value={skillData}
        id="skill"
        placeholder="Enter skill"
        required
        onChange={handleChange}
      />
      <button className="skill-btn" disabled={!skillData} type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default SkillForm;
