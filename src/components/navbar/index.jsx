import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
// import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "../languageToggle";
import { useCart } from "../../context/CartContext";
import clsx from "clsx";
import { ShoppingCart } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  // { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Shop", to: "/shop" },
  { label: "Cart", to: "/cart" },
];

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <nav className="hidden md:flex gap-6 items-center">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right: toggles */}
          <LanguageToggle/>
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            {menuOpen ? <HiX size={28} /> : <FaBars size={24} />}
          </button>
        </div>
        <Link to="/cart" className="relative">
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "md:hidden transition-all duration-300 overflow-hidden",
          menuOpen ? "max-h-screen py-4 px-4" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-4">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
