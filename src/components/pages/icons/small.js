import React from "react";
import { Link } from "react-router-dom";

const Small = props => {
  const { id, name, pic } = props.icon;
  const { type } = props.type

  return (
    <Link to={`/${type}/${id}`} 
    className="icons">
    <div className="image"
    style={{
      backgroundImage: "url(" + pic + ")"
    }}/>
      <div className="info">
        <div className="name">{name}</div>
      </div>
    </Link>
  );
};

export default Small;
