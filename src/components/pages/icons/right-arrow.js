import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightArrow = props => {
  return (
    <div className="arrow" onClick={props.goToNextSlide}>
      <h3 onClick={props.goToNextSlide}>
        <FontAwesomeIcon icon="angle-double-right" />
      </h3>
    </div>
  );
};

export default RightArrow;
