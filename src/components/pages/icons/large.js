import React from "react";
import { Link } from "react-router-dom";

const Large = props => {
  const { name, pic } = props.member;

  return (
    <Link to={`/member/${name}`} 
    className="members-icons">
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

export default Large;
