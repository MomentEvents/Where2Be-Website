"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import "./Demo.css";
import joinedEvents from "../../assets/where2be-mock-joined-events.jpg";
import searchEvents from "../../assets/where2be-mock-search-events.jpg";
import hostedEvents from "../../assets/where2be-mock-hosted-events.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Demo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <section id="demo">
        <div className="container demo">
          <div className="demo-content">
            <div className="demo-left" data-aos="fade-right">
              <h1>Calendar</h1>
              <Image 
                src={joinedEvents} 
                alt="Calendar"
                style={{
                  width: '85%',
                  height: 'auto',
                }}
              />
              <h2>Keep track of your planned events.</h2>
            </div>
            <div className="demo-middle" data-aos="fade-up">
              <h1>Explore</h1>
              <Image 
                src={searchEvents} 
                alt="Search"
                style={{
                  width: '85%',
                  height: 'auto',
                }}
              />
              <h2>Explore any upcoming event based on its title, description, location, and more.</h2>
            </div>
            <div className="demo-right" data-aos="fade-left">
              <h1>Host</h1>
              <Image 
                src={hostedEvents} 
                alt="Tags"
                style={{
                  width: '85%',
                  height: 'auto',
                }}
              />
              <h2>Manage your hosted events and guest lists.</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;