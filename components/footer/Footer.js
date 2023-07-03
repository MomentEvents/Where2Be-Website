import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section id="footer">
        <div className="container footer">
          <div className="footer-box">
            <h4>Contact Us</h4>
            <div className="footer-contact u-text-small">
              <div>
                <FaMapMarkerAlt /> &nbsp; UCSD & UIUC
              </div>
              <div>
                <FaEnvelope />&nbsp;<a href='mailto:momenteventsapp@gmail.com'>&nbsp; momenteventsapp@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="footer-box">
            <p className="u-text-small"> </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;