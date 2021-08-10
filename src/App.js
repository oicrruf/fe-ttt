import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Friends } from "./components/Friends";
import { Score } from "./components/Score";
import { BestScore } from "./components/BestScore";
import './App.css'


export default function App() {
  return (
    <Router>
      <div className='mainContainer'>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <li>
              <Link to="/score">Score</Link>
            </li>
            <li>
              <Link to="/bestscore">Best Score</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Home />
            <Login />
          </Route>

          <Route path="/register">
            <Home />
            <Register />
          </Route>

          <Route path="/friends">
            <Home />
            <Friends />
          </Route>

          <Route path="/score">
            <Home />
            <Score />
          </Route>

          <Route path="/bestscore">
            <Home />
            <BestScore />
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
