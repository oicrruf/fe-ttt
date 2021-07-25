import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Home, Register } from "./";

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
      </Switch>
      <nav>
        <ul className="grid grid-cols-3 gap-4">
          <li>
            <Link className="line" to="/">Home</Link>
          </li>
          <li>
            <Link className="line" to="/register">Registrarse</Link>
          </li>
        </ul>
      </nav>
    </Router>
  )
};

export { Navbar };
