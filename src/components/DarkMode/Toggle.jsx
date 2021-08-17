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
    <div>
      <input
        type="checkbox"
        className="checkbox"
        id="chk"
        checked={isDark()}
        onChange={(e) => toggleTheme(e)}
      />
      <label className="label" htmlFor="chk">
        <div className="ball"></div>
      </label>
    </div>
  );
};
