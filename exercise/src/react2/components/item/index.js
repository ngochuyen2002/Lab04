import React from "react";
import "./style.scss";

const Item = (props) => {
  const { title, content } = props;
  return (
    <div className="component-item">
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Item;