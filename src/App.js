import "./App.css";
import { FaRegTimesCircle, FaRegCircle } from "react-icons/fa";
import TicTacToeBtns from "./Components/TicTacToeBtns";

const App = () => {
  return (
    <div id="main">
      <FaRegTimesCircle size="150" />
      <FaRegCircle size="150" />
      <TicTacToeBtns />
    </div>
  );
};

export default App;
