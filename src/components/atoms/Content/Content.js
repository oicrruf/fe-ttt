import React from "react";
import "./Content.css";

function Content({ children }) {
  return <div className="a-content bg-primary p-5">{children}</div>;
}

export default Content;
