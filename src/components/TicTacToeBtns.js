import React from "react";
import { FaRegTimesCircle, FaRegCircle } from "react-icons/fa";

const selectRegion = (id) => {
  console.log(id);
};
const TicTacToeBtns = () => {
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
    </div>
  );
};

export { TicTacToeBtns };
