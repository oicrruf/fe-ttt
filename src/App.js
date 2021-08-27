import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Content, MainContainer, Avatar } from "./components/atoms";
import { Login } from "./components/molecules";
import { BestScore } from "./components/BestScore";
import { Toggle } from "./components/DarkMode/Toggle";
import { Friends } from "./components/Friends";
import { Game } from "./components/Game";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { Score } from "./components/Score";
import { Statics } from "./components/Statics";
import { ThemeProvider } from "./context/themeContext";
import TagLi from "./components/molecules/TagLi";

export default function App() {
  const [token, setToken] = useState(Date.now());

  function newToken() {
    setToken(Date.now());
  }

  return (
    <Router>
      <ThemeProvider>
        <MainContainer>
          <nav>
            <Avatar image={localStorage.getItem("@ttt_nickname")} />
            <Toggle />
            <ul>
              <TagLi to="/" name="Home" />
              <TagLi to="/login" name="Login" />
              <TagLi to="/register" name="Register" />
              <TagLi to="/friends" name="Friends" />
              <TagLi to="/score" name="Score" />
              <TagLi to="/bestscore" name="Best Score" />
              <TagLi
                to={`/game/${token}`}
                name="New Game"
                onClickContent={newToken}
              />
              <TagLi to="/statics" name="Statics" />
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Content>
                <Home />
              </Content>
            </Route>

            <Route exact path="/login">
              <Content>
                <Login />
              </Content>
            </Route>

            <Route exact path="/register">
              <Content>
                <Register />
              </Content>
            </Route>

            <Route exact path="/friends">
              <Content>
                <Friends />
              </Content>
            </Route>

            <Route exact path="/score">
              <Content>
                <Score />
              </Content>
            </Route>

            <Route exact path="/bestscore">
              <Content>
                <BestScore />
              </Content>
            </Route>

            <Route exact path="/game/:id">
              <Content>
                <Game />
              </Content>
            </Route>
            <Route exact path="/statics">
              <Content>
                {/* <Redirect to="/login" /> */}
                <Statics />
              </Content>
            </Route>
          </Switch>
        </MainContainer>
      </ThemeProvider>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
