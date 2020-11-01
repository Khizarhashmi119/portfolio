import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addSkillAction } from "../store/actions/skillsActions";

const SkillForm = ({ type }) => {
  const [inputs, setInputs] = useState({
    skill: "",
    order: 0,
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSkillAction(inputs));
  };

  return (
    <form className="skill-form" onSubmit={handleSubmit}>
      <label htmlFor="skill">Skill:</label>
      <input
        className="input-skill"
        type="text"
        name="skill"
        value={inputs.skill}
        id="skill"
        required
        onChange={handleChange}
      />
      <label htmlFor="order">Order:</label>
      <input
        className="input-skill-order"
        type="number"
        name="order"
        value={inputs.order}
        id="order"
        onChange={handleChange}
      />
      <button className="skill-btn" type="submit">
        {type}
      </button>
    </form>
  );
};

export default SkillForm;
