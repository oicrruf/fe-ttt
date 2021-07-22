import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { FaRegTimesCircle, FaRegCircle } from "react-icons/fa";
import { Register } from "./components/Register";

const App = () => {
  return (
    <div id="main">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/register">Registrarse</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>

      <FaRegTimesCircle size="150" />
      <FaRegCircle size="150" />
    </div>
  );
};

export default App;
