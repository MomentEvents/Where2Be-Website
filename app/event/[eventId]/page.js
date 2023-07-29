import React from "react";
import Image from "next/image";
import Head from 'next/head';
import picture from "@/assets/where2be-background.webp";
import "./event.css";
import "../../home.css";
import "@/components/index.css"
import { Date, Time } from '@/components/DateTime/datetime';
import { CalendarIcon, LocationIcon, TimeIcon, VisibilityIcon } from "@/assets/eventIcons";
import { Navbar, Footer } from "@/components/index";


export default async function Event({ params }) {
    const event = await getEvent(params.eventId);

    return (
        <>
            {/* thumbnail */}
            <Head>
                <meta property="og:title" content={event.title} />
                <meta property="og:description" content={event.description} />
                <meta property="og:image" content={event.picture} />
                <meta property="og:url" content={`https://where2be.app/event/${event.event_id}`} />
            </Head>

            {/* navbar w/o menu */}
            <header className="navbar-bg">
                <Navbar showMenu={false}/>
            </header>

            {/* event content */}
            <div className="event-container" >
                {/* left text container */}
                <div className="event-text-container" >
                    <h1 className="event-title">{event.title}</h1>
                
                    <div className="date-time-container">
                        <div className="icon-text-container">
                            <CalendarIcon />
                            <div style={{ width: "10px" }}></div>
                            <h4 className="u-text-small">
                                <Date dateString={event.start_date_time} />
                            </h4>
                        </div>
                        <div style={{ width: "30px" }}></div>
                        <div className="icon-text-container">
                            <TimeIcon />
                            <div style={{ width: "10px" }}></div>
                            <h4 className="u-text-small">
                                <Time timeString={event.start_date_time} /> - <Time timeString={event.end_date_time} />
                            </h4>
                        </div>
                    </div>
                    
                    <div className="icon-text-container">
                        <LocationIcon />
                        <div style={{ width: "10px" }}></div>
                        <h4 className="u-text-small">{event.location}</h4>
                    </div>

                    <h4 className="u-text-small description">{event.description} </h4>
                </div>

                {/* right image container */}
                <div className="event-image-container" >
                    <Image 
                        src={event.picture} 
                        alt="Event Image" 
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
            </div>

            {/* footer */}
            <Footer />
        </>
    );
}

export async function getEvent( eventId ) {
  
    try {
        // const response = await fetch(`https://where2be.app/event/event_id/${eventId}`);
        // const event = await response.json();

        const event = {
            'event_id': eventId,
            'title': 'Nerdy Event 10',
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor tortor justo, vitae iaculis mi consectetur et. Sed condimentum mattis purus, vel lobortis erat dignissim ut. Pellentesque eu condimentum urna. Nulla porttitor eget augue sit amet rhoncus. Fusce rutrum velit id aliquam malesuada. Praesent interdum eget nisl eu mattis. Donec a lacus tristique, sollicitudin risus at, convallis neque. Sed vel posuere urna, id sodales neque. Mauris in turpis laoreet, ultrices mauris vitae, pretium lacus. Aliquam efficitur quis sem eu dictum.',
            'picture': picture,
            'location': 'Geisel',
            'start_date_time': "2023-06-16T17:00:00Z",
            'end_date_time': "2023-06-16T18:00:00Z",
            'visibility': true
        };

        return event;
    } catch (error) {
        console.error('Error fetching event data:', error);
        return null;
    }
}