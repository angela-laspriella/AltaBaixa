import React from "react";

import IntroSection from "../components/Intro";
import MichaelSection from "../components/Michael_Intro";
import NavSection from "../components/Nav";
import HeroSection from "../components/Hero";
import CatarinaSection from "../components/Catarina";
import Menu from "../components/Menu";

function Home() {
  return (
    <>
      <Menu />
      <NavSection />
      <HeroSection />
      <IntroSection />
      <MichaelSection />
      <CatarinaSection />
    </>
  );
}

export default Home;
