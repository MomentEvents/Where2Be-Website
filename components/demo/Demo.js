import React from "react";
import Image from "next/image";
import "./Demo.css";
import joinedEvents from "../../assets/where2be-mock-joined-events.webp";
import searchEvents from "../../assets/where2be-mock-search-events.webp";
import hostedEvents from "../../assets/where2be-mock-hosted-events.webp";
import "aos/dist/aos.css";

const Demo = () => {

  return (
    <div>
      <section id="demo">
        <div className="container demo">
          <div className="demo-content">
            <div className="demo-left">
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
            <div className="demo-middle">
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
            <div className="demo-right">
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