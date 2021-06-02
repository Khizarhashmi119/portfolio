import React from "react";
import Tag from "../Tag/Tag";

import "./TagsList.css";

const TagsList = ({ tags }) => {
  return (
    <ul className="tags-list">
      {tags.map((text, index) => (
        <Tag key={0} text={text} />
      ))}
    </ul>
  );
};

export default TagsList;
