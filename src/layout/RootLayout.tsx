import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FooterEx } from "../components/FooterEx";

const RootLayout: React.FC = () => {

  return (
    <div className="bg-lightbrown bg-opacity-40">
      <Header />
      <Outlet />
      <FooterEx/>
      <Footer />
    </div>
  );
};

export default RootLayout;
