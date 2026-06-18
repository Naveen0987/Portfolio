import React from "react";

import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "./context/ThemeContext";
const ThemeToggle = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
