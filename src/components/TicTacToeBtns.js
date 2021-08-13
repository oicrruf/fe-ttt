import { useState } from "react";
import React from "react";
import { FaRegTimesCircle, FaRegCircle } from "react-icons/fa";

const TicTacToeBtns = () => {
  const [number, setNumber] = useState(0);
  const [click, setClick] = useState(0);

  const sumar = () => {
    setNumber(number + 1);
    setClick(click + 1);
  };

  const selectRegion = (id) => {
    console.log(id);
    sumar();
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={() => selectRegion(1)}>
                <FaRegTimesCircle size="50" />
              </button>
            </td>
            <td>
              <button onClick={() => selectRegion(2)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td>
              <button onClick={() => selectRegion(3)}>
                <FaRegTimesCircle size="50" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => selectRegion(4)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td>
              <button onClick={() => selectRegion(5)}>
                <FaRegTimesCircle size="50" />
              </button>
            </td>
            <td>
              <button onClick={() => selectRegion(6)}>
                <FaRegCircle size="50" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => selectRegion(7)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td>
              <button onClick={() => selectRegion(8)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td>
              <button onClick={() => selectRegion(9)}>
                <FaRegTimesCircle size="50" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h4>Le has picado {click} veces</h4>
    </div>
  );
};

export { TicTacToeBtns };
