import React from "react";
import "./MainContainer.css";

const MainContainer = ({ children }) => {
  return <div className="mainContainer bg-secondary">{children}</div>;
};

export default MainContainer;
