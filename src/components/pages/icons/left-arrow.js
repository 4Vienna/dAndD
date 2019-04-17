import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftArrow = props => {
  return (
    <div className="arrow" onClick={props.goToPrevSlide}>
      <h3 onClick={props.goToPrevSlide}>
        <FontAwesomeIcon icon="angle-double-left" />
      </h3>
    </div>
  );
};

export default LeftArrow;
