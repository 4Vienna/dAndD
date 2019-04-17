import React from "react";
import { Link } from "react-router-dom";

const CharacterIcon = props => {
  const { id, name, pic, race, className, align, bio } = props.character;

  return (
    <Link to={`/character/${id}`} className="icons">
      <div
        className="info"
        style={{
          backgroundImage: "url(" + pic + ")"
        }}
      >
        <div className="name">{name}</div>
      </div>
    </Link>
  );
};

export default CharacterIcon;
