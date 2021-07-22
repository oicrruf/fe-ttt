import React from "react";
const selectRegion = (id) => {
  console.log(id);
};
const TicTacToeBtns = () => {
  return (
    <div>
      <button onClick={() => selectRegion(1)}>1</button>
      <button onClick={() => selectRegion(2)}>2</button>
      <button onClick={() => selectRegion(3)}>3</button>
      <button onClick={() => selectRegion(4)}>4</button>
      <button onClick={() => selectRegion(5)}>5</button>
      <button onClick={() => selectRegion(6)}>6</button>
      <button onClick={() => selectRegion(7)}>7</button>
      <button onClick={() => selectRegion(8)}>8</button>
      <button onClick={() => selectRegion(9)}>9</button>
    </div>
  );
};

export default TicTacToeBtns;
