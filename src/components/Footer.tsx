import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  const isSmall = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      {isSmall ? (
        <footer className="h-[72px] z-50 w-screen bg-[#964b00] sticky bottom-0 flex justify-around items-center font-bold text-light">
          <div className="flex flex-col items-center gap-1">
            <IoLocationOutline className="text-xl" />
            <h1 className="text-sm">Location</h1>
          </div>
          <div className="flex flex-col items-center gap-1">
            <IoCallOutline className="text-xl" />
            <h1 className="text-sm">Contact</h1>
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaRegClock className="text-xl" />
            <h1 className="text-sm">11AM - 10PM</h1>
          </div>
          <div className="flex items-center gap-2 text-2xl">
          <NavLink to="https://www.facebook.com">
              <FiFacebook />
            </NavLink>
            <NavLink to="https://www.instagram.com">
              <FiInstagram />
            </NavLink>
            <NavLink to="https://www.whatsapp.com">
              <SiWhatsapp />
            </NavLink>
            <NavLink to="https://www.twitter.com">
              <RiTwitterXLine />
            </NavLink>
          </div>
        </footer>
      ) : (
        <footer className="h-[72px] z-50 w-screen bg-[#964b00] sticky bottom-0 flex justify-around items-center font-bold text-light">
          <div className="flex items-center gap-1">
            <IoLocationOutline className="text-xl" />
            <h1 className="text-sm">Enchanted Groove, Mystical Kingdom</h1>
          </div>
          <div className="flex items-center gap-1">
            <IoCallOutline className="text-xl" />
            <h1 className="text-sm">1-800-FAIRY-TL3</h1>
          </div>
          <div className="flex items-center gap-1">
            <FaRegClock className="text-xl" />
            <h1 className="text-sm">11:00AM - 10:00PM</h1>
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <NavLink to="https://www.facebook.com">
              <FiFacebook />
            </NavLink>
            <NavLink to="https://www.instagram.com">
              <FiInstagram />
            </NavLink>
            <NavLink to="https://www.whatsapp.com">
              <SiWhatsapp />
            </NavLink>
            <NavLink to="https://www.twitter.com">
              <RiTwitterXLine />
            </NavLink>
          </div>
        </footer>
      )}
    </>
  );
};

export { Footer };
