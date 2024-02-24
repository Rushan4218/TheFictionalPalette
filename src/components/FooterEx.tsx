import React from "react";
import logo from "../assets/logo-white.svg";
import { FooterForm } from "./FooterForm";

const FooterEx: React.FC = () => {

  return (
    <div className="w-screen">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex items-center justify-around p-4 bg-brown">
          <div className="flex flex-col items-center text-center">
            <img src={logo} className="h-20" />
            <h1 className="text-lg font-bold text-white">
              The Fictional Palette
            </h1>
            <h1 className="text-lg text-light">Enchanted Groove,</h1>
            <h1 className="text-lg text-light">Mystical Kingdom</h1>
            <h1 className="text-md text-light">1-800-FAIRY-TL3</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-md font-bold text-light mt-4">Open Hours</h1>
            <div className="text-md text-white">
              <h1>11AM - 10PM (Sunday)</h1>
              <h1>11AM - 10PM (Monday)</h1>
              <h1>11AM - 10PM (Tuesday)</h1>
              <h1>11AM - 10PM (Wednesday)</h1>
              <h1>11AM - 10PM (Thursday)</h1>
              <h1>11AM - 10PM (Friday)</h1>
              <h1>11AM - 10PM (Saturday)</h1>
            </div>
          </div>
        </div>
        <FooterForm />
      </div>
    </div>
  );
};

export { FooterEx };
