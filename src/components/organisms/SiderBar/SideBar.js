import React from "react";
import { Avatar } from "../../atoms";
import { Toggle } from "../../DarkMode/Toggle";
import { TagLi } from "../../molecules";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div id="sidebar">
      <div>
        <Avatar image={localStorage.getItem("@ttt_nickname")} />
        <nav>
          <ul>
            <TagLi to="/" name="Home" />
            <TagLi to="/login" name="Login" />
            <TagLi to="/register" name="Register" />
            <TagLi to="/friends" name="Friends" />
            <TagLi to="/score" name="Score" />
            <TagLi to="/bestscore" name="Best Score" />
            {/* <TagLi
            to={`/game/${token}`}
            name="New Game"
            onClickContent={newToken}
          /> */}
            <TagLi to="/statics" name="Statics" />
          </ul>
        </nav>
      </div>
      <Toggle />
    </div>
  );
};
export default SideBar;
