import React from "react";
import Footer from "./home/Footer";
import { useLocation } from "react-router-dom";
import LanguageToggle from "../components/languageToggle";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      {isHome && <LanguageToggle />}
      {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
