import React from "react";

import IntroSection from "../components/Intro";
import MichaelSection from "../components/Michael_Intro";
import NavSection from "../components/Nav";
import HeroSection from "../components/Hero";

function Home() {
  return (
    <>
      <NavSection />
      <HeroSection />
      <IntroSection />
      <MichaelSection />
    </>
  );
}

export default Home;
