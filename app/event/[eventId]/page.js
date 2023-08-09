"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import picture from "@/assets/where2be-background.webp";
import "./event.css";
import "../../home.css";
import "@/components/index.css";
import { Date, Time } from "@/components/DateTime/datetime";
import { Navbar, Footer } from "@/components/index";
import RedirectWindow from "@/components/RedirectWindow/RedirectWindow.jsx";
import { FiCalendar, FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { TbMapSearch } from "react-icons/tb";
import { COLORS } from "@/constants/themes";
import { BasicModal } from "@/components/BasicModal/BasicModal";
import { useSearchParams, useRouter } from "next/navigation";

const momentAPI = "https://api.momentevents.app/v1.0.1";

export default async function Event({ params }) {
  const searchParams = useSearchParams();
  const showModal = searchParams.get("download");
  const router = useRouter();

  useEffect(() => {
    const url = `/event/${params.eventId}/?download=true`;
    router.push(url);
  }, []);

  const event = await getEvent(params.eventId);
  const interests = await getEventInterests(params.eventId);

  return (
    <>
      {event && interests ? (
        <>
          {/* thumbnail */}
          <Head>
            <meta property="og:title" content={event.title} />
            <meta property="og:description" content={event.description} />
            <meta property="og:image" content={event.picture} />
            <meta
              property="og:url"
              content={`https://where2be.app/event/${event.event_id}`}
            />
          </Head>

          {/* navbar w/o menu */}
          <header className="navbar-bg">
            <Navbar showMenu={false} />
          </header>

          {/* event content */}
          <div className="event-container">
            {/* left text container */}
            <div className="event-text-container">
              <h1 className="event-title">{event.title}</h1>

              <div className="date-time-container">
                <div
                  className="icon-text-container"
                  style={{ marginRight: "30px" }}
                >
                  <FiCalendar
                    size={30}
                    color={COLORS.purple}
                    style={{ marginRight: 10 }}
                  />

                  <h4 className="u-text-small">
                    <Date dateString={event.start_date_time} />
                  </h4>
                </div>
                <div className="icon-text-container">
                  <FiClock
                    size={30}
                    color={COLORS.purple}
                    style={{ marginRight: 10 }}
                  />
                  <h4 className="u-text-small">
                    <Time timeString={event.start_date_time} /> -{" "}
                    <Time timeString={event.end_date_time} />
                  </h4>
                </div>
              </div>

              <div className="icon-text-container">
                <IoLocationOutline
                  size={30}
                  color={COLORS.lightGray}
                  style={{ marginRight: 10 }}
                />
                <h4 className="u-text-small">{event.location}</h4>
              </div>

              <h4 className="u-text-small description">{event.description} </h4>

              {interests.map((interest) => (
                <div className="interest" key={interest}>
                  <h4 className="u-text-small">{interest}</h4>
                </div>
              ))}

              <div
                className="icon-text-container"
                style={{ marginTop: "1.5rem" }}
              >
                <TbMapSearch
                  size={30}
                  color={COLORS.lightGray}
                  style={{ marginRight: 10 }}
                />
                <h4 className="u-text-small">{event.visibility}</h4>
              </div>
            </div>

            {/* right image container */}
            <div className="event-image-container">
              <img
                src={event.picture}
                alt="Event Image"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>

          {/* footer */}
          <Footer />

          {/* download popup */}
          {showModal && <BasicModal path={"/event/" + event.event_id} />}
        </>
      ) : (
        <RedirectWindow url={"https://where2be.app/404"} />
      )}
    </>
  );
}

export async function getEventInterests(eventId) {
  try {
    const response = await fetch(momentAPI + `/interest/event_id/${eventId}`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_access_token: null,
      }),
    });

    if (!response.ok) {
      return null;
    }
    const responseJSON = await response.json();
    console.log(responseJSON);
    const interests = [];
    for (var i = 0; i < responseJSON.length; i++) {
      interests.push(responseJSON[i].name);
    }

    // const interests =["Academic"]

    console.log(interests);
    return interests;
  } catch (error) {
    console.error("Error fetching event data:", error);
    return null;
  }
}

export async function getEvent(eventId) {
  try {
    const response = await fetch(momentAPI + `/event/event_id/${eventId}`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_access_token: null,
      }),
    });

    if (!response.ok) {
      return null;
    }
    const responseJSON = await response.json();
    const event = {
      event_id: responseJSON.event_id,
      title: responseJSON.title,
      description: responseJSON.description,
      picture: responseJSON.picture,
      location: responseJSON.location,
      start_date_time: responseJSON.start_date_time,
      end_date_time: responseJSON.end_date_time,
      visibility: responseJSON.visibility,
    };

    // const event = {
    //     'event_id': event_id,
    //     'title': "Nerdy event",
    //     'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor tortor justo, vitae iaculis mi consectetur et. Sed condimentum mattis purus, vel lobortis erat dignissim ut. Pellentesque eu condimentum urna. Nulla porttitor eget augue sit amet rhoncus. Fusce rutrum velit id aliquam malesuada. Praesent interdum eget nisl eu mattis. Donec a lacus tristique, sollicitudin risus at, convallis neque. Sed vel posuere urna, id sodales neque. Mauris in turpis laoreet, ultrices mauris vitae, pretium lacus. Aliquam efficitur quis sem eu dictum.',
    //     'picture': picture,
    //     'location': 'Geisel',
    //     'start_date_time': "2023-06-16T17:00:00Z",
    //     'end_date_time': "2023-06-16T18:00:00Z",
    //     'visibility': "Public",
    //     'interests': ['Academic', 'Athletic']
    // };

    console.log(event);

    return event;
  } catch (error) {
    console.error("Error fetching event data:", error);
    return null;
  }
}
