import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm">
            © {new Date().getFullYear()} Ahmad Al Mujawer
          </p>
          <p className="text-sm">All rights reserved.</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="hover:text-blue-500 transition"
          >
            Home
          </a>

          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
          <Link to="/shop" className="hover:text-blue-500 transition">
            Shop
          </Link>
        </div>

        <div className="flex justify-center md:justify-end space-x-6 text-xl">
          <a
            href="https://www.linkedin.com/in/ahmad-al-mujawer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ahmad-mj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/gero.mj/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
