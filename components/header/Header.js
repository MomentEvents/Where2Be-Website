"use client";
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
              <span className="main-text">Where2Be:
                <span className="secondary-color">Your University
                Events Guide</span>
              </span>
            </h1>

            <div className="release-text">Discover, Connect, and Experience Campus Life Like Never Before</div>
            {/* <div className="header-cta">
              <div className="header-download-buttons">
                <a
                  href="https://where2be.app/download/ios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={iosdownload} alt="iOS Download" width="200" />
                </a>
              </div>
              <div className="header-download-buttons">
                <a
                  href="https://where2be.app/download/android"
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
            </div> */}
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
