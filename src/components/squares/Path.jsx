import React, { useState, useEffect } from "react";
import Positions from "./Positions";
import { boardLabels } from "../../Utils/positions/boardLabels";
import { redCows, blackCows } from "../../Utils/circles/Cows";
import { useSelector, useDispatch } from "react-redux";
import { guns } from "../../Utils/positions/gunPositions";
import { redShoots, blackShoots, addGun, removeGun } from "../../Redux/guns";
import { paths } from "../../Utils/paths/paths";
import { movingStage } from "../../Redux/playStages";

function Path() {
  const [cows, setCows] = useState({ ...redCows, ...blackCows });
  const [shots, reload] = useState(guns);
  const isActive = useSelector((state) => state.activeCow.activeCow);
  const playingCows = useSelector((state) => state.playingCows);
  const filledGuns = useSelector((state) => state.guns.filledGuns);

  const dispatch = useDispatch();


  useEffect(() => {
    console.log(filledGuns);
  }, [filledGuns]);

  function afterPlacingCow() {
    //function that runs in the useEffect after a piece is placed
    let test =
      cows[isActive].redOrBlack === "#4c2b2b"
        ? "playingBlackCows"
        : "playingRedCows";

    for (let i = 0; i < shots.length; i++) {
      //for loop over the gun match possibilities
      const gunArr = shots[i].gunArr;
      if (playingCows[test][gunArr[0]]) {
        if (playingCows[test][gunArr[1]]) {
          if (playingCows[test][gunArr[2]]) {
            let arr = shots;
            const filled = arr.splice(i, 1);
            dispatch(addGun(filled[0].gunArr));
            reload(arr);      
            alert("you won");
            test === "playingBlackCows"
              ? dispatch(blackShoots())
              : dispatch(redShoots());
            break;
          }
        }
      }
    }
    playingCows.playedRounds === 24 && dispatch(movingStage());
  }

  useEffect(() => {
    console.log(playingCows);
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
            key={el}
          />
        );
      })}
      <Positions setCows={setCows} cows={cows} shots={shots} reload={reload} />
    </>
  );
}

export default Path;
