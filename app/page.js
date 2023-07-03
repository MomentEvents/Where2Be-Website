import "./home.css";

import Demo from "../components/demo/Demo.js";
import { Navbar, Header, Features, Footer } from "../components/index";
import React from "react";

function Home() {
  
  return (
    <>
      <header className="navbar-bg">
        <Navbar />
      </header>
      <header className="navbar-bg">
        <header className="header-bg">
          <Header />
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

export default Home;