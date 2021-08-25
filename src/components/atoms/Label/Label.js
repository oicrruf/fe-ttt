import React from "react";
import "./Label.css";

function Label({ children }) {
  return (
    <label className="block text-md font-medium text-primary">{children}</label>
  );
}

export default Label;
