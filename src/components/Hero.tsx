import React from "react";
import heroImg from "../assets/heroImage.avif";
import logo from "../assets/logo-white.svg";
import { FaAngleDown } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={heroImg}
        alt="HEROIMG"
        className="object-cover h-screen w-screen brightness-[.6] transition-tranform -translate-y-[5rem]"
        style={{
          animation: "slide-down 2s .3s cubic-bezier(0,1.06,.76,1) forwards",
        }}
      />
      <div className="absolute flex flex-col items-center">
        <div className="flex gap-4">
          <img
            src={logo}
            alt="LOGO"
            className="h-32 opacity-0"
            style={{
              animation: "fade-in 1.5s .7s cubic-bezier(0,1.06,.76,1) forwards",
            }}
          />
          <div className="text-4xl font-extrabold text-white">
            <h1
              className="opacity-0"
              style={{
                animation:
                  "slide-down-pop-in 1.5s 1s cubic-bezier(0,.62,.26,1.18) forwards",
              }}
            >
              The
            </h1>
            <h1
              className="opacity-0"
              style={{
                animation:
                  "slide-down-pop-in 1.5s 1.4s cubic-bezier(0,.62,.26,1.18) forwards",
              }}
            >
              Fictional
            </h1>
            <h1
              className="opacity-0"
              style={{
                animation:
                  "slide-down-pop-in 1.5s 1.8s cubic-bezier(0,.62,.26,1.18) forwards",
              }}
            >
              Palette
            </h1>
          </div>
        </div>
        <h2
          className="text-white text-[1.5rem] font-bold opacity-0 text-center"
          style={{ animation: "fade-in 1s 2s ease-in-out forwards" }}
        >
          Flavors That Transcend Reality
        </h2>
      </div>
      <FaAngleDown
        className="absolute bottom-[120px] text-4xl text-white opacity-0"
        style={{
          animation:
            "fade-in .8s 2.2s cubic-bezier(0,1.06,.76,1) forwards, move 1.5s 3s ease-in-out infinite",
        }}
      />
    </div>
  );
};

export { Hero };
