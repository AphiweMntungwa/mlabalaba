import React, { useState, useEffect } from "react";
import Bottom from "./Bottom";
import { positionObjects } from "../Utils/positions/Positions";
import { boardLabels } from "../Utils/positions/boardLabels";
import { redCows, blackCows } from "../Utils/circles/Cows";
import { useSelector } from "react-redux";
import { makeNum } from "./Top";

function Middle() {
  const [arr, pushArr] = useState([]);
  const [points, position] = useState(positionObjects);
  const [reds, setReds] = useState({...redCows, ...blackCows});
  const isActive = useSelector((state) => state.activeCow.activeCow);

  useEffect(() => {
    pushArr(makeNum(30));
  }, []);

  function handlePositionClick(e, el) {
    if (points[el].isOccupied || isActive === false) {
      return null;
    } else {
      const { x, y } = points[el];
      const obj = { ...reds };
      obj[isActive].setPosition(x, y);
      setReds(obj);
      const actives = document.querySelectorAll(".active");
      actives.forEach((el) => {
        el.classList.contains("active") && el.remove();
      });
  
    }
  }

  return (
    <>
      <path stroke="black" strokeWidth=".6" d="m70 10 v120" />
      <path stroke="black" strokeWidth=".6" d="m10 70 h120" />\
      {Object.keys(reds).map((el) => {
        return (
          <circle
            key={el}
            cx={reds[el].x}
            cy={reds[el].y}
            r={reds[el].radius}
            stroke={reds[el].stroke}
            className={el}
            style={{ fill: reds[el].redOrBlack }}
          />
        );
      })}
      {Object.keys(points).map((el) => {
        return (
          <circle
            key={el}
            cx={points[el].x}
            cy={points[el].y}
            r={points[el].radius}
            stroke={points[el].stroke}
            className={el}
            style={{ fill: "white", opacity: '0' }}
            onClick={(e) => handlePositionClick(e, el)}
          />
        );
      })}
      <text>
        {Object.keys(boardLabels).map((el) => {
          return (
            <tspan
              x={boardLabels[el].x}
              y={boardLabels[el].y}
              style={{ fontSize: ".3em", fill: "blue" }}
              key={el}
            >
              {el}
            </tspan>
          );
        })}
      </text>
      <path stroke="black" strokeWidth=".6" d="m10 10 v120" />
      <path stroke="black" strokeWidth=".6" d="m10 10 h120" />
      <path stroke="black" strokeWidth=".6" d="m110 30 v80" />
      <path stroke="black" strokeWidth=".6" d="m10 130 h120" />
      <Bottom />
    </>
  );
}

export default Middle;
