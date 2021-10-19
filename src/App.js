import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Content, MainContainer } from "./components/atoms";
import { SideBar } from "./components/organisms";
import { Login } from "./components/molecules";
import { BestScore } from "./components/BestScore";
import { Friends } from "./components/Friends";
import { Game } from "./components/Game";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { Score } from "./components/Score";
import { Statics } from "./components/Statics";
import { ThemeProvider } from "./context/themeContext";

export default function App() {
  const [token, setToken] = useState(Date.now());
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  function newToken() {
    setToken(Date.now());
  }

  useEffect(() => {
    !localStorage.getItem("@ttt_nickname")
      ? setIsAuthenticated(false)
      : setIsAuthenticated(true);
  }, []);

  // useEffect(() => {
  //   isAuthenticated != null &&
  //     console.log(`El estado de la sesión es ${isAuthenticated}`);
  // }, [isAuthenticated]);

  return (
    <Router>
      <ThemeProvider>
        <MainContainer>
          <SideBar />
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
                {isAuthenticated ? <Statics /> : <Redirect to="/login" />}
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
