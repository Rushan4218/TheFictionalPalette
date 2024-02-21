import React from "react";
import { Hero } from "../components/Hero";
import { HomeAbout } from "../components/HomeAbout";
import { Features } from "../components/Features";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <Features />
    </div>
  );
};
export { Home };
