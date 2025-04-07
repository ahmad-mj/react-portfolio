import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";


const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("selectedTheme") || "dark");

  const switchTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("selectedTheme", newTheme);
  };

  const applyTheme = (theme) => {
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

    Object.entries(themes[theme]).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <label className="theme-switch">
      <input type="checkbox" checked={theme === "light"} onChange={switchTheme} />
      <span className="slider">
        {theme === "light" ? <FaSun className="icon sun" /> : <FaMoon className="icon moon" />}
      </span>
    </label>
  );
};

export default ThemeToggle;
