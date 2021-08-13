import { useState, useEffect } from 'react';
import { FaRegTimesCircle, FaRegCircle } from "react-icons/fa";

const selectRegion = (id) => {
  console.log(id);
};
const TicTacToeBtns = () => {
  const [ number, setNumber ] = useState(0)
  const [ click, setClick] = useState(0)

  const sumar = () => {
    setNumber(number + 1)
    setClick(click + 1)
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><button onClick={() => selectRegion(1)} onClick={sumar}><FaRegTimesCircle size="50" /></button></td>
            <td><button onClick={() => selectRegion(2)} onClick={sumar}><FaRegCircle size="50" /></button></td>
            <td><button onClick={() => selectRegion(3)} onClick={sumar}><FaRegTimesCircle size="50" /></button></td>
          </tr>
          <tr>
            <td><button onClick={() => selectRegion(4)} onClick={sumar}><FaRegCircle size="50" /></button></td>
            <td><button onClick={() => selectRegion(5)} onClick={sumar}><FaRegTimesCircle size="50" /></button></td>
            <td><button onClick={() => selectRegion(6)} onClick={sumar}><FaRegCircle size="50" /></button></td>
          </tr>
          <tr>
            <td><button onClick={() => selectRegion(7)} onClick={sumar}><FaRegCircle size="50" /></button></td>
            <td><button onClick={() => selectRegion(8)} onClick={sumar}><FaRegCircle size="50" /></button></td>
            <td><button onClick={() => selectRegion(9)} onClick={sumar}><FaRegTimesCircle size="50" /></button></td>
          </tr>
        </tbody>
      </table>
      <h4>Le has picado {click} veces</h4>
    </div>
  );
};

export { TicTacToeBtns };
