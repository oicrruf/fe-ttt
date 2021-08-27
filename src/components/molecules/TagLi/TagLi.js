import React from "react";
import { NavLink } from "react-router-dom";

const TagLi = ({ to, onClickContent, name }) => {
  return (
    <li className="link text-primary">
      <NavLink exact to={to} activeClassName="-active" onClick={onClickContent}>
        {name}
      </NavLink>
    </li>
  );
};

export default TagLi;
