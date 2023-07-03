import React from "react";
import "./Feature.css";
import { BsHexagon } from "react-icons/bs";

const Feature = ({ icon, heading, text }) => {
  return (
    <div>
      <div className="feature">
        <div className="feature-icon">
          <BsHexagon color="#FFFFFF" size={55} />
          <div className="inner-icon">{icon}</div>
        </div>

        <div className="feature-text">
          <h3>{heading}</h3>
          <h4 className="u-text-small">{text}</h4>
        </div>
      </div>
    </div>
  );
};

export default Feature;