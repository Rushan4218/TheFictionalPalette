import React from "react";

const FooterForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex-1 bg-lightbrown py-8 px-12 flex flex-col w-full"
      onSubmit={handleSubmit}
    >
      <h1 className="mb-2 text-xl font-bold text-white">Message Us</h1>
      <div className="mb-2">
        <label htmlFor="username" className="text-white text-lg font-bold">
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
  );
};

export { FooterForm };
