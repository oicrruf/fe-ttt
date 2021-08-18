import React, { useContext } from "react";
import "./Toggle.css";

export const Toggle = ({ context }) => {
  const { theme, setTheme } = useContext(context);

  function isDark() {
    return theme === "dark";
  }

  function toggleTheme(e) {
    setTheme(e.target.checked ? "dark" : "light");
  }

  return (
    <>
      <label className="inline" htmlFor="chk">
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
