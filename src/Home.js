import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";

const Home = () => {
  const data = {
    name: "Sahil's store",
  }

  return (
    <>
    <HeroSection myData={data} />
    <Services/>
  <Trusted/>
  </>
  )
}

export default Home;