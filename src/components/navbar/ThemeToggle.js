import React, { useEffect, useState } from "react";

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

    Object.keys(themes[theme]).forEach((key) => {
      document.documentElement.style.setProperty(key, themes[theme][key]);
    });
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <label className="theme-switch">
      <input type="checkbox" checked={theme === "light"} onChange={switchTheme} />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeToggle;
