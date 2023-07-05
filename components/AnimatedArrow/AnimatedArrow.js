import React from "react";
import "./AnimatedArrow.css";
import { FaArrowDown } from "react-icons/fa";

import "aos/dist/aos.css";

const AnimatedArrow = () => {
  return (
    <div>
      <FaArrowDown className="Animated-Arrow" size={50}></FaArrowDown>
    </div>
  );
};

export default AnimatedArrow;