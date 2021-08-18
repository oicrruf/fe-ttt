import { useState, useRef, useEffect } from "react";
import React from "react";
import { FaRegTimesCircle, FaRegCircle } from "react-icons/fa";

const TicTacToeBtns = () => {
  const [number, setNumber] = useState(0);
  const [click, setClick] = useState(0);

  // function TextInputWithFocusButton() {
  //   const inputEl = useRef(null);
  //   const onButtonClick = () => {
  //     // `current` apunta al elemento de entrada de texto montado
  //     inputEl.current.focus();
  //   };
  //   return (
  //     <>
  //       <input ref={inputEl} type="text" />
  //       <button onClick={onButtonClick}>Focus the input</button>
  //     </>
  //   );
  // }

  const p1 = useRef(1);
  const p2 = useRef(2);
  const p3 = useRef(3);
  const p4 = useRef(4);
  const p5 = useRef(5);
  const p6 = useRef(6);
  const p7 = useRef(7);
  const p8 = useRef(8);
  const p9 = useRef(9);

  const sumar = () => {
    setNumber(number + 1);
    setClick(click + 1);
  };

  const selectRegion = (id) => {
    console.log(id);
    sumar();
  };

  useEffect(() => {
    let positions = [
      p1.current,
      p2.current,
      p3.current,
      p4.current,
      p5.current,
      p6.current,
      p7.current,
      p8.current,
      p9.current,
    ];
    let random = Math.floor(Math.random() * (9 - 1)) + 1;
    positions[random].click();
  }, []);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <button ref={p1} onClick={() => selectRegion(1)}>
                <FaRegTimesCircle size="50" />
              </button>
            </td>
            <td>
              <button ref={p2} onClick={() => selectRegion(2)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td>
              <button ref={p3} onClick={() => selectRegion(3)}>
                <FaRegTimesCircle size="50" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button ref={p4} onClick={() => selectRegion(4)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td>
              <button ref={p5} onClick={() => selectRegion(5)}>
                <FaRegTimesCircle size="50" />
              </button>
            </td>
            <td>
              <button ref={p6} onClick={() => selectRegion(6)}>
                <FaRegCircle size="50" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button ref={p7} onClick={() => selectRegion(7)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td>
              <button ref={p8} onClick={() => selectRegion(8)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td>
              <button ref={p9} onClick={() => selectRegion(9)}>
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
