// src/pages/Home.jsx
import React from "react";
import SliderBanner from "../components/SliderBanner";
import CatalogPreview from "../components/CatalogPreview";
import ProjectsPreview from "../components/ProjectsPreview";
import AboutBrief from "../components/AboutBrief";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div className="home-page-content">
      <SliderBanner />
      <CatalogPreview />\
      <ProjectsPreview />
      <AboutBrief />
      <CallToAction />
    </div>
  );
};

export default Home;
