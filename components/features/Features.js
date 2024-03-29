"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import "./Features.css";
import "../index.css"
import viewEvents from "../../assets/where2be-mock-home-event-details.jpg";
import createEvents from "../../assets/where2be-mock-create-event.jpg";
import Feature from "./Feature";
import { FeatureListTop, FeatureListBot } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="features-background">
      <section id="features">
        <div className="container features">
          <div className="features-content">
            <div className="features-left1" data-aos="fade-right">
              <Image 
                src={viewEvents} 
                alt="View Events" 
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <div className="features-right1" data-aos="fade-left">
              {FeatureListTop.map((feature) => (
                <Feature
                  key={feature.id}
                  icon={feature.icon}
                  heading={feature.heading}
                  text={feature.text}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="container features">
          <div className="features-content">
            <div className="features-left2" data-aos="fade-right">
              {FeatureListBot.map((feature) => (
                <Feature
                  key={feature.id}
                  icon={feature.icon}
                  heading={feature.heading}
                  text={feature.text}
                />
              ))}
            </div>
            <div className="features-right2" data-aos="fade-left">
              <Image 
                src={createEvents} 
                alt="Create Events" 
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
