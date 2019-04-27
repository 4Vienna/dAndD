import React from 'react'
import { Link } from "react-router-dom";

const CamIcon = props => {
    const { id, name, pic } = props.campaign;
  
    return (
      <Link to={`/campaign/${name}`} className="Campaign-Icons">
        <div
          className="campaign-info"
          style={{
            backgroundImage: "url(" + pic + ")"
          }}
        >
          <div className="name">{name}</div>
        </div>
      </Link>
    );
  };
  
  export default CamIcon;