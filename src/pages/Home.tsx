import React, { useRef } from "react";
import { Hero } from "../components/Hero";
import { HomeAbout } from "../components/HomeAbout";
import { Features } from "../components/Features";

const Home: React.FC = () => {

  const footerRef = useRef(null);

  return (
    <div>
      <Hero />
      <HomeAbout />
      <Features />
    </div>
  );
};
export { Home };
