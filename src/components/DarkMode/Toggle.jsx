import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import "./Toggle.css";

export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function isDark() {
    return theme === "dark";
  }

  function toggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }

  return (
    <>
      <input
        type="checkbox"
        className="checkbox"
        id="chk"
        checked={isDark()}
        onChange={(e) => toggleTheme(e)}
      />
      <label className="label" htmlFor="chk">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <div className="ball"></div>
      </label>
    </>
  );
};
