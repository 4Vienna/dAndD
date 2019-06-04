import React from "react";
import { Link } from "react-router-dom";

const Large = props => {
  const { name, pic, id } = props.member;

  return (
    <Link to={`/member/${id}`} 
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
