import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./styles.scss";

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
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Resume",
    to: "/resume",
  },
  {
    label: "Skills",
    to: "/skills",
  },
];
const Navbar = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <div>
      <nav className={`navbar ${menuIsVisible && "active"}`}>
        <div className="wrapper">
          <div className="left">
            <div
              className="hamburger-menu"
              onClick={() => setMenuIsVisible(!menuIsVisible)}
            >
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </div>
          </div>

          <ul className={`navbar_menu ${menuIsVisible && "active"}`}>
            {data.map((item, key) => (
              <li key={key} className="menu_item">
                <Link to={item.to} className="menu_links">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
