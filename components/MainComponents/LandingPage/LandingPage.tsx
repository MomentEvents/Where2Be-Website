import Demo from "@/components/demo/Demo";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

import "./page.css"

type LandingPageProps = {
  schoolName: string,
  isSchoolReleased: boolean
}

function LandingPage(props: LandingPageProps) {
  return (
    <>
      <header className="navbar-bg">
        <Navbar />
      </header>
      <header className="navbar-bg">
        <header className="header-bg">
          <Header schoolName={props.schoolName} isSchoolReleased={props.isSchoolReleased} />
        </header>
      </header>
      
      <div className="features-background">
        <Features />
        <Demo />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage