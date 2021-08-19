import React, { useContext } from "react";
import "./Toggle.css";
import { ThemeContext } from "../../context/themeContext";

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
      <label className="inline cursor-pointer" htmlFor="chk">
        DarkMode:
      </label>
      <div className="inline-flex items-center">
        <input
          type="checkbox"
          className="checkbox"
          id="chk"
          checked={isDark()}
          onChange={(e) => toggleTheme(e)}
        />
        <label className="label ml-2" htmlFor="chk">
          <div className="ball"></div>
        </label>
      </div>
    </>
  );
};
