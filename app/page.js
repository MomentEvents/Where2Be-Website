import "./home.css";

import { Navbar, Header, Features, Footer, Demo } from "../components/index";
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