import React from 'react'
import { Link } from "react-router-dom";

const Medium = props => {
    const { id, name, pic } = props.icon;
  
    return (
      <Link to={`/${props.type}/${name}`} 
      className="medium-icons">
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
  
  export default Medium;