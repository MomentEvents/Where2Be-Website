"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import "./Header.css";
import "../UI/Button/Button.css";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import iosdownload from "../../assets/iosdownload.webp";
import androiddownload from "../../assets/androiddownload.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <section id="header">
      <div className="container header">
        <div className="aligning-contents-center">
          <div className="header-left" data-aos="fade-right">
            <h1>
              <span className="main-text">We make finding events easy</span>
              <span className="subtitle-text">By students. For students.</span>
            </h1>

            <div className="release-text">Download the app now!</div>
            <div className="header-cta">
              <div className="header-download-buttons">
                <a
                  href="https://momentevents.app/ios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={iosdownload} alt="iOS Download" width="200" />
                </a>
              </div>
              <div className="header-download-buttons">
                <a
                  href="https://momentevents.app/android"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={androiddownload}
                    alt="Android Download"
                    width="200"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="header-arrow">
            <AnimatedArrow></AnimatedArrow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;