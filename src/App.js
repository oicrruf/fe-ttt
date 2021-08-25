import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { Content, MainContainer } from "./components/atoms";
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
import "semantic-ui-css/semantic.min.css";

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
            <Toggle />
            <ul>
              <li className="link text-primary">
                <NavLink exact to={"/"} activeClassName="-active">
                  Home
                </NavLink>
              </li>
              <li className="link  text-primary">
                <NavLink exact to="/login" activeClassName="-active">
                  Login
                </NavLink>
              </li>
              <li className="link  text-primary">
                <NavLink exact to="/register" activeClassName="-active">
                  Register
                </NavLink>
              </li>
              <li className="link  text-primary">
                <NavLink exact to="/friends" activeClassName="-active">
                  Friends
                </NavLink>
              </li>
              <li className="link  text-primary">
                <NavLink exact to="/score" activeClassName="-active">
                  Score
                </NavLink>
              </li>
              <li className="link  text-primary">
                <NavLink exact to="/bestscore" activeClassName="-active">
                  Best Score
                </NavLink>
              </li>
              <li className="link  text-primary">
                <NavLink
                  exact
                  to={`/game/${token}`}
                  activeClassName="-active"
                  onClick={newToken}
                >
                  New Game
                </NavLink>
              </li>
              <li className="link text-primary">
                <NavLink exact to="/statics" activeClassName="-active">
                  Statics
                </NavLink>
              </li>
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
