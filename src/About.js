import React from "react";
import HeroSection from "./components/HeroSection";

//about section
const About = () => {
  const data = {
    name: "Our Store",
  };

  return <HeroSection myData={data} />;
};

export default About; 
