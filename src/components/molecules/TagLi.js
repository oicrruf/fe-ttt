import React from 'react'

import {
    NavLink,
  } from "react-router-dom";

function TagLi(props) {

    return (
        <li className="link text-primary">
            <NavLink exact to={props.to} 
            activeClassName="-active"  
            onClick={props.onClickContent}>
                {props.name}
            </NavLink>
        </li>

    )
}

export default TagLi
