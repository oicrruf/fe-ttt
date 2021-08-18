import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Friends } from "./components/Friends";
import { Score } from "./components/Score";
import { BestScore } from "./components/BestScore";
import { Statics } from "./components/Statics";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="mainContainer">
        <nav>
          <ul>
            <li className="link">
              <NavLink exact to="/" activeClassName="-active">
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
