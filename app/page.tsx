import "./home.css";

import { Navbar, Header, Features, Footer, Demo } from "../components/index";
import React from "react";
import LandingPage from "@/components/MainComponents/LandingPage/LandingPage";

function Home() {
  return (
    <LandingPage schoolName={null} isSchoolReleased={false}/>
  );
}

export default Home;