import React, { useEffect, useRef } from "react";
import { FaRegCircle, FaRegTimesCircle } from "react-icons/fa";

const iconStyle = { color: "white" };

const TicTacToeBtns = () => {
  const p1 = useRef();
  const p2 = useRef();
  const p3 = useRef();
  const p4 = useRef();
  const p5 = useRef();
  const p6 = useRef();
  const p7 = useRef();
  const p8 = useRef();
  const p9 = useRef();

  const selectRegion = (id) => {
    console.log(id);
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
    <div className="bg">
      <div className="region" id="region-1">
        <button ref={p1} onClick={() => selectRegion(1)}>
          <FaRegTimesCircle style={iconStyle} size="50" />
        </button>
      </div>
      <div className="region">
        <button ref={p2} onClick={() => selectRegion(2)}>
          <FaRegCircle style={iconStyle} size="50" />
        </button>
      </div>
      <div className="region" id="region-3">
        <button ref={p3} onClick={() => selectRegion(3)}>
          <FaRegTimesCircle style={iconStyle} size="50" />
        </button>
      </div>
      <div className="region">
        <button ref={p4} onClick={() => selectRegion(4)}>
          <FaRegCircle style={iconStyle} size="50" />
        </button>
      </div>
      <div className="region">
        <button ref={p5} onClick={() => selectRegion(5)}>
          <FaRegTimesCircle style={iconStyle} size="50" />
        </button>
      </div>
      <div className="region">
        <button ref={p6} onClick={() => selectRegion(6)}>
          <FaRegCircle style={iconStyle} size="50" />
        </button>
      </div>
      <div className="region" id="region-7">
        <button ref={p7} onClick={() => selectRegion(7)}>
          <FaRegTimesCircle style={iconStyle} size="50" />
        </button>
      </div>
      <div className="region">
        <button ref={p8} onClick={() => selectRegion(8)}>
          <FaRegCircle style={iconStyle} size="50" />
        </button>
      </div>
      <div className="region" id="region-9">
        <button ref={p9} onClick={() => selectRegion(9)}>
          <FaRegTimesCircle style={iconStyle} size="50" />
        </button>
      </div>
    </div>
  );
};

export { TicTacToeBtns };
