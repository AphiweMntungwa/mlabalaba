import React, { useState, useEffect } from "react";
import Positions from "./Positions";
import { boardLabels } from "../Utils/positions/boardLabels";
import { redCows, blackCows } from "../Utils/circles/Cows";
import { useSelector, useDispatch } from "react-redux";
import { guns } from "../Utils/positions/gunPositions";
import { redShoots, blackShoots } from "../Redux/guns";
import { paths } from "../Utils/paths/paths";

function Middle() {
  const [cows, setCows] = useState({ ...redCows, ...blackCows });
  const [keys, addKeys] = useState([]);
  const [shots, reload] = useState(guns);
  const [num, addNum] = useState();
  const isActive = useSelector((state) => state.activeCow.activeCow);
  const playingCows = useSelector((state) => state.playingCows);
  const playStage = useSelector((state) => state.playStages);
  const gunMatch = useSelector((state) => state.guns);

  const dispatch = useDispatch();

  useEffect(() => {
    let arr = keys;
    const filled = arr.splice(num, 1);
    addKeys(arr);
  }, [num]);

  useEffect(() => {
    shots.forEach((el) => {
      addKeys((state) => [...state, Object.keys(el)]);
    });
  }, []);

  //function that runs in the useEffect after a piece is placed
  function afterPlacingCow() {
    let test =
      cows[isActive].redOrBlack === "#4c2b2b"
        ? "playingBlackCows"
        : "playingRedCows";

    //for loop over the gun match possibilities
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].every((val) => playingCows[test].includes(val))) {
        addNum(i);
        alert("you won");
        test === "playingBlackCows"
          ? dispatch(blackShoots())
          : dispatch(redShoots());
        break;
      }
    }
  }

  useEffect(() => {
    if (isActive) {
      afterPlacingCow();
    }
  }, [cows, playingCows]);

  return (
    <>
      {Object.keys(cows).map((el) => {
        return (
          <circle
            key={el}
            cx={cows[el].x}
            cy={cows[el].y}
            r={cows[el].radius}
            stroke={cows[el].stroke}
            className={el}
            style={{ fill: cows[el].redOrBlack }}
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
      {Object.keys(paths).map((el) => {
        return (
          <path
            stroke="black"
            strokeWidth={paths[el].strokeWidth}
            d={paths[el].getPath()}
            className={paths[el].class}
          />
        );
      })}
      <Positions setCows={setCows} cows={cows} />
    </>
  );
}

export default Middle;
