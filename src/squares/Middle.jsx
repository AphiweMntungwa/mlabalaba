import React, { useState, useEffect } from "react";
import Bottom from "./Bottom";
import { positionObjects } from "../Utils/positions/Positions";
import { makeNum } from "./Top";

function Middle() {
  const [arr, pushArr] = useState([]);

  useEffect(() => {
    pushArr(makeNum(30));
  }, []);

  return (
    <>
      <path stroke="black" stroke-width=".6" d="m70 10 v120" />
      <path stroke="black" stroke-width=".6" d="m10 70 h120" />

      {Object.keys(positionObjects).map((el) => {
        return (
          <circle
            key={el}
            cx={positionObjects[el].position.x}
            cy={positionObjects[el].position.y}
            r={positionObjects[el].radius}
            stroke={positionObjects[el].stroke}
            className={el}
          />
        );
      })}

      <path stroke="black" strokeWidth=".6" d="m10 10 v120" />
      <path stroke="black" strokeWidth=".6" d="m10 10 h120" />

      <path stroke="black" strokeWidth=".6" d="m110 30 v80" />
      <path stroke="black" strokeWidth=".6" d="m10 130 h120" />
      <Bottom />
    </>
  );
}

export default Middle;
