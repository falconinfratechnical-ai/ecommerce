import React from "react";
import { FaAward, FaIndustry, FaTruck, FaHeadset } from "react-icons/fa";
import "../styles/ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2 className="title">Why Choose Us</h2>

      <div className="features">
        <div className="feature">
          <FaAward className="icon" />
          <p>30+ Years Experience</p>
        </div>
        <div className="feature">
          <FaIndustry className="icon" />
          <p>Certified Industrial Quality</p>
        </div>
        <div className="feature">
          <FaTruck className="icon" />
          <p>Pan-India Delivery</p>
        </div>
        <div className="feature">
          <FaHeadset className="icon" />
          <p>After-Sales Service & Support</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
