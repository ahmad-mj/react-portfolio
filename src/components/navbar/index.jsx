import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./styles.scss";
import { WiEarthquake } from "react-icons/wi";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

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
  return (
    <>
      <nav className="navbar">
        <ThemeToggle />
        <div className="navbar_container">
          <Link to={"/"} className="navbar_logo">
            <WiEarthquake size={30} />
          </Link>

          <ul className={`navbar_menu ${menuIsVisible && "active"}`}>
            {data.map((item, key) => (
              <li key={key} className="menu_item">
                <Link
                  to={item.to}
                  className="menu_links"
                  onClick={handleMenuClick}
                >
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
      </div>
    </>
  );
};
export default Navbar;
