import React, { useState, useEffect } from "react";
import Bottom from "./Bottom";
import { positionObjects } from "../Utils/positions/Positions";
import { boardLabels } from "../Utils/positions/boardLabels";
import { redCows, blackCows } from "../Utils/circles/Cows";
import { useSelector, useDispatch } from "react-redux";
import { makeNum } from "./Top";
import { activatePlayer } from "../Redux/activePlayer";
import { guns } from "../Utils/positions/gunPositions";
import {
  togglePlayingRedCows,
  togglePlayingBlackCows,
} from "../Redux/playingCows";
import { redShoots, blackShoots } from "../Redux/guns";
import { activateCows } from "../Redux/activeCow";

function Middle() {
  const [arr, pushArr] = useState([]);
  const [points, position] = useState(positionObjects);
  const [cows, setCows] = useState({ ...redCows, ...blackCows });
  const [keys, addKeys] = useState([]);
  const [shots, reload] = useState(guns);
  const [num, addNum] = useState();
  const isActive = useSelector((state) => state.activeCow.activeCow);
  const playingCows = useSelector((state) => state.playingCows);
  const playStage = useSelector((state) => state.playStages);
  const gunMatch = useSelector((state) => state.guns);
  const shot = useSelector((state) => state.guns);

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
    pushArr(makeNum(30));
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

  function handlePositionClick(e, el) {
    if (points[el].isOccupied) {
      if (shot.shotsRed || shot.shotsBlack) {
        const killedCow = document.getElementsByClassName(
          points[el].occupiedBy
        )[0];
        killedCow.remove();
        shot.shotsBlack ? dispatch(blackShoots()) : dispatch(redShoots());
        let arr = points;
        arr[el].vacate();
        position(arr);
        dispatch(activateCows(false));
      }
      return null;
    }

    if (points[el].isOccupied || isActive === false) {
      return null;
    } else {
      console.log(Object.keys(points));
      let arr = points;
      arr[el].occupy(isActive);
      position(arr);

      const { x, y } = points[el];
      const obj = { ...cows };
      obj[isActive].setPosition(x, y);
      obj[isActive].isOnBoard = true;

      setCows(obj);
      const actives = document.querySelectorAll(".active");
      actives.forEach((el) => {
        el.classList.contains("active") && el.remove();
      });
      if (cows[isActive].redOrBlack === "#4c2b2b") {
        dispatch(activatePlayer("red"));
        dispatch(togglePlayingBlackCows(el));
      } else {
        dispatch(activatePlayer("#4c2b2b"));
        dispatch(togglePlayingRedCows(el));
      }
    }
  }


  return (
    <>
      <path stroke="black" strokeWidth=".6" d="m70 10 v120" />
      <path stroke="black" strokeWidth=".6" d="m10 70 h120" />\
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
      {Object.keys(points).map((el) => {
        return (
          <circle
            key={el}
            cx={points[el].x}
            cy={points[el].y}
            r={points[el].radius}
            stroke={points[el].stroke}
            className={el}
            style={{ fill: "white", opacity: "0" }}
            onClick={(e) => handlePositionClick(e, el)}
            data-testid='positions'
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
