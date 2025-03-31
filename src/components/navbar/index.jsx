import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./styles.scss";
import { WiEarthquake } from "react-icons/wi";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useEffect } from "react";

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];
const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuIsVisible(false);
  };
  const switchTheme = (theme) => {
    const themes = {
      light: {
        "--theme-main-color": "#222831",
        "--theme-background-color": "#ffffff",
        "--primary_bg": "rgb(200, 200, 200, 87%)",
      },
      dark: {
        "--theme-main-color": "#dddd",
        "--theme-background-color": "#09666c",
        "--primary_bg": "rgb(98 45 27 / 87%)",
      },
    };
  
    // Apply theme colors
    Object.keys(themes[theme]).forEach((key) => {
      document.documentElement.style.setProperty(key, themes[theme][key]);
    });
  
    // Save theme preference
    localStorage.setItem("selectedTheme", theme);
  };
  
  // Load stored theme on startup
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") || "dark"; // Default to dark mode
    switchTheme(savedTheme);
  }, []);
  return (
    <>
      <nav className="navbar">
        <div className="navbar_container">
        <button onClick={() => switchTheme("light")}>Light Mode</button>
        <button onClick={() => switchTheme("dark")}>Dark Mode</button>

          <Link to={"/"} className="navbar_logo">
            <WiEarthquake size={30} />
          </Link>

          <ul className={`navbar_menu ${menuIsVisible && "active"}`}>
            {data.map((item, key) => (
              <li key={key} className="menu_item">
                <Link to={item.to} className="menu_links" onClick={handleMenuClick}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="toggleIcon"
            onClick={() => setMenuIsVisible(!menuIsVisible)}
          >
            {menuIsVisible ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
      <div className={`hero-section ${menuIsVisible ? "menu-active" : ""}`}>
        {/* Hero content goes here */}
      </div>
    </>
  );
};
export default Navbar;
