"use client";
import React from "react";
import "../UI/Button/Button.css";
import logo from "../../assets/where2be-logo.webp";
import discord from "../../assets/discordicon.svg";
import "./Navbar.css";
import Image from "next/image";
import Link from "next/link";
import useWindowDimensions from '../UseWindowDimensions/useWindowDimensions';

const Navbar = ({ showMenu }) => {
  const { width, height, isMobile } = useWindowDimensions();

  return (
    // <!-- Navbar Section -->
    <nav className="navbar">
      <div className="navbar__container">
        <div className="logo">
          <div className="logo-container">
            <Image src={logo} className="logo-text" alt="Logo" height={25} />
          </div>
        </div>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        {
          showMenu &&
          <ul className="navbar__menu">
            {isMobile ? (
              <li className="navbar__btn">
                <Link
                  href="/discord"
                  target="_blank"
                  className="button"
                  id="temp-page"
                >
                  <Image
                    src={discord}
                    className="discord-icon-mobile"
                    alt="discord"
                    width={40}
                  />
                </Link>
              </li>
            ) : (
              <li className="navbar__btn">
                <Link
                  href="/discord"
                  target="_blank"
                  className="button"
                  id="temp-page"
                >
                  <Image 
                    src={discord} 
                    className="discord-icon" 
                    alt="discord"
                    width={40}
                  />
                  Join our Discord!
                </Link>
              </li>
            )}
          </ul>
        }
      </div>
    </nav>
  );
};

export default Navbar;