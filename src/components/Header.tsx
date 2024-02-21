import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Header: React.FC = () => {
  const [top, setTop] = useState<boolean>(true);


    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setTop(false);
      } else {
        setTop(true);
      }
    });


  return (
      <header className="fixed z-50 w-full h-[5rem]">
        <div className="absolute h-full w-full z-20 flex items-center gap-4 px-8 ">
          <button className="mr-auto text-3xl text-white">
            <IoMenu />
          </button>
          <button className="header-btn">TAKEOUT</button>
          <button className="header-btn">RESERVE</button>
        </div>
        <div
          className={`absolute z-10 w-full h-[5rem] bg-opacity-95 shadow-md shadow-zinc-900 bg-lightbrown transition-transform duration-300 ${
            top ? "-translate-y-[5rem]" : "translate-y-0"
          }`}
        ></div>
      </header>
    
  );
};

export { Header };
