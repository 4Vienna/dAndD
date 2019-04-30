import React from "react";
import { Link } from "react-router-dom";

const Small = props => {
  const { id, name, pic } = props.character;

  return (
    <Link to={`/character/${name}`} 
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
