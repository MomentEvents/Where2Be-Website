"use client";
import React, { useState, useEffect } from "react";
import "../UI/Button/Button.css";
import logo from "../../assets/w2blogo.webp";
import discord from "../../assets/discordicon.svg";
import "./Navbar.css";
import Image from "next/image";
import useWindowDimensions from '../UseWindowDimensions/useWindowDimensions';

const Navbar = () => {
  const { width, height, isMobile } = useWindowDimensions();

  return (
    // <!-- Navbar Section -->
    <nav className="navbar">
      <div className="navbar__container">
        <div className="logo">
          <div className="logo-container">
            <Image src={logo} className="logo-text" height="40" alt="Logo" />
          </div>
        </div>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          {isMobile ? (
            <li className="navbar__btn">
              <a
                href="https://momentevents.app/discord"
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
              </a>
            </li>
          ) : (
            <li className="navbar__btn">
              <a
                href="https://momentevents.app/discord"
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
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;