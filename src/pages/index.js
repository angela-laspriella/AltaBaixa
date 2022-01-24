import React from "react";

import IntroSection from "../components/Intro";
import MichaelSection from "../components/Michael_Intro";
import NavSection from "../components/Nav";
import HeroSection from "../components/Hero";
import CatarinaSection from "../components/Catarina";

function Home() {
  return (
    <>
      <NavSection />
      <HeroSection />
      <IntroSection />
      <MichaelSection />
      <CatarinaSection />
    </>
  );
}

export default Home;
