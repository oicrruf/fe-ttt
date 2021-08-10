import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home } from "./";
import { Register } from './Register';
import { Login } from './Login';

const Navbar = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
      <nav>
        <ul className="grid grid-cols-3 gap-4">
          <li>
            <Link className="line" to="/">Home</Link>
          </li>
          <li>
            <Link className="line" to="/register">Register</Link>
          </li>
          <li>
            <Link className="line" to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </Router>
  )
};

export { Navbar };
