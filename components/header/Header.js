"use client";
import React, { useEffect } from "react";
import Link from "next/link";
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
            <div className="header-title">
              <h1>Where</h1>
              <h1 className="secondary-color">2</h1>
              <h1>Be</h1>
            </div>

            <div className="release-text">What's happening on campus?</div>
            <div className="header-cta">
              <h2>Coming Fall 2023</h2>
            </div>
            {/* <div className="header-cta">
              <div className="header-download-buttons">
                <Link
                  href="/download/ios"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={iosdownload} alt="iOS Download" width="200" />
                </Link>
              </div>
              <div className="header-download-buttons">
                <Link
                  href="/download/android"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={androiddownload}
                    alt="Android Download"
                    width="200"
                  />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
