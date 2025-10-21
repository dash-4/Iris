// src/pages/Home.jsx
import React from "react";
import SliderBanner from "../components/SliderBanner";
import CatalogPreview from "../components/CatalogPreview";
import BenefitsBlock from "../components/BenefitsBlock";
import ProjectsPreview from "../components/ProjectsPreview";
import AboutBrief from "../components/AboutBrief";

const Home = () => {
  return (
    <div className="home-page-content">
      <SliderBanner />
      <CatalogPreview />
      <BenefitsBlock />
      <ProjectsPreview />
      <AboutBrief />
    </div>
  );
};

export default Home;
