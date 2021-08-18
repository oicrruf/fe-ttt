import React, { useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import { BestScore } from "./components/BestScore";
import { Friends } from "./components/Friends";
import { Game } from "./components/Game";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Score } from "./components/Score";
import { ThemeProvider } from "./context/themeContext";
import { Toggle } from "./components/DarkMode/Toggle";
import { ThemeContext } from "./context/themeContext";
import { Statics } from "./components/Statics";

export default function App() {
  const [token, setToken] = useState(Date.now());

  function newToken() {
    setToken(Date.now());
  }

  return (
    <Router>
      <ThemeProvider>
        <div className="mainContainer bg-white dark:bg-black">
          <nav>
            <ul>
              <li className="link text-black dark:text-white">
                <NavLink exact to={"/"} activeClassName="-active">
                  Home
                </NavLink>
              </li>
              <li className="link  text-black dark:text-white">
                <NavLink exact to="/login" activeClassName="-active">
                  Login
                </NavLink>
              </li>
              <li className="link  text-black dark:text-white">
                <NavLink exact to="/register" activeClassName="-active">
                  Register
                </NavLink>
              </li>
              <li className="link  text-black dark:text-white">
                <NavLink exact to="/friends" activeClassName="-active">
                  Friends
                </NavLink>
              </li>
              <li className="link  text-black dark:text-white">
                <NavLink exact to="/score" activeClassName="-active">
                  Score
                </NavLink>
              </li>
              <li className="link  text-black dark:text-white">
                <NavLink exact to="/bestscore" activeClassName="-active">
                  Best Score
                </NavLink>
              </li>
              <li className="link  text-black dark:text-white">
                <NavLink
                  exact
                  to={`/game/${token}`}
                  activeClassName="-active"
                  onClick={newToken}
                >
                  New Game
                </NavLink>
              </li>
              <li className="link flex text-black dark:text-white">
                <Toggle context={ThemeContext}></Toggle>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/friends">
              <Friends />
            </Route>

            <Route exact path="/score">
              <Score />
            </Route>

            <Route exact path="/bestscore">
              <BestScore />
            </Route>

            <Route exact path="/game/:id">
              <Game />
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
      <div className="mainContainer">
        <nav>
          <ul>
            <li className="link">
              <NavLink exact to={"/"} activeClassName="-active">
                Home
              </NavLink>
            </li>
            <li className="link">
              <NavLink exact to="/login" activeClassName="-active">
                Login
              </NavLink>
            </li>
            <li className="link">
              <NavLink exact to="/register" activeClassName="-active">
                Register
              </NavLink>
            </li>
            <li className="link">
              <NavLink exact to="/friends" activeClassName="-active">
                Friends
              </NavLink>
            </li>
            <li className="link">
              <NavLink exact to="/score" activeClassName="-active">
                Score
              </NavLink>
            </li>
            <li className="link">
              <NavLink exact to="/bestscore" activeClassName="-active">
                Best Score
              </NavLink>
            </li>
            <li className="link">
              <NavLink exact to="/statics" activeClassName="-active">
                Statics
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/game/${token}`}
                activeClassName="-active"
                onClick={newToken}
              >
                New Game
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/friends">
            <Friends />
          </Route>

          <Route exact path="/score">
            <Score />
          </Route>

          <Route exact path="/bestscore">
            <BestScore />
          </Route>

          <Route exact path="/statics">
            <Statics />
          </Route>

          <Route exact path="/game/:id">
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
