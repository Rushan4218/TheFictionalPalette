import React from "react";
import logo from "../assets/logo-white.svg";

const FooterEx: React.FC = () => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  }


  return (
    <footer className="flex flex-col w-screen">
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
              <h1>10AM - 10PM (Sunday)</h1>
              <h1>10AM - 10PM (Monday)</h1>
              <h1>10AM - 10PM (Tuesday)</h1>
              <h1>10AM - 10PM (Wednesday)</h1>
              <h1>10AM - 10PM (Thursday)</h1>
              <h1>10AM - 10PM (Friday)</h1>
              <h1>10AM - 10PM (Saturday)</h1>
            </div>
          </div>
        </div>
        <div className="bg-lightbrown flex-1 flex py-8 px-12">
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <h1 className="mb-2 text-xl font-bold text-white">Message Us</h1>
            <div className="mb-2">
              <label
                htmlFor="username"
                className="text-white text-lg font-bold"
              >
                Name
              </label>
              <input
                type="text"
                id="username"
                className="max-w-64 ml-2 px-2 py-[4px] focus:outline-none rounded-lg shadow-inner shadow-gray-500"
                placeholder="Someone"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-white text-lg font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="max-w-64 ml-2 px-2 py-[4px] focus:outline-none rounded-lg shadow-inner shadow-gray-500"
                placeholder="someone@gmail.com"
              />
            </div>
            <textarea
              className="h-40 mt-4 placeholder:align-top p-4 focus:outline-none rounded-lg shadow-inner shadow-gray-500"
              placeholder="Your message here..."
            />
            <button className="self-start mt-4 bg-green px-4 py-2 rounded-lg text-light font-bold hover:bg-light hover:text-darkgreen active:scale-90 duration-300 ">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#964b00] h-[72px]">Another section</div>
    </footer>
  );
};

export { FooterEx };
