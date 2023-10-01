import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import "../UI/Button/Button.css";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import iosdownload from "../../assets/iosdownload.jpg";
import androiddownload from "../../assets/androiddownload.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

type HeaderProps = {
  schoolName: string;
  isSchoolReleased: boolean;
};

const Header = (props: HeaderProps) => {
  return (
    <section id="header">
      <div className="container header">
        <div className="aligning-contents-center">
          <div className="header-left">
            <div className="header-title">
              <h1 className="primary-color">Where</h1>
              <h1 className="secondary-color">2</h1>
              <h1 className="primary-color">Be</h1>
            </div>
            <div className="release-text">
              {props.schoolName
                ? "Your Central " + props.schoolName + " Events Hub"
                : "What's happening on campus?"}
            </div>
            <div className="header-cta">
              {props.schoolName && !props.isSchoolReleased ? (
                <div className="header-cta">
                  <h2 className="primary-color">Coming Soon</h2>
                </div>
              ) : (
                <div className="header-download-buttons">
                  <Link href="/download/ios" target="_blank" rel="noreferrer">
                    <Image src={iosdownload} alt="iOS Download" width="200" />
                  </Link>
                </div>
              )}
            </div>
            {/* <div className="header-download-buttons">
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
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
