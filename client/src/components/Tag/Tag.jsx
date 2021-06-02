import React from "react";

import "./Tag.css";

const Tag = ({ text }) => {
  return <li className="tag">#{text}</li>;
};

export default Tag;
