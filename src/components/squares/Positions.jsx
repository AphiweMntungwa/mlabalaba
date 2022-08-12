import React, { useState, useEffect } from "react";
import { positionObjects } from "../../Utils/positions/Positions";
import { useSelector, useDispatch } from "react-redux";
import { activateCows } from "../../Redux/activeCow";
import { redShoots, blackShoots } from "../../Redux/guns";
import { activatePlayer } from "../../Redux/activePlayer";
import {
  togglePlayingBlackCows,
  togglePlayingRedCows,
  dropBlackCow,
  dropRedCow,
} from "../../Redux/playingCows";
import "../../css/bottom.scss";
import { gunShot, movingStage, changeArrayState, placeCow } from "./functions";

function Positions({ setCows, cows }) {
  const [points, position] = useState(positionObjects);
  const [ele, elele] = useState();
  const [previousActive, setPreviousActive] = useState("");
  const [second, useSecond] = useState(false);
  const playingCows = useSelector((state) => state.playingCows);
  const shot = useSelector((state) => state.guns);
  const isActive = useSelector((state) => state.activeCow.activeCow);
  const playStage = useSelector((state) => state.playStages.playStage);
  const dispatch = useDispatch();

  function handlePositionClick(e, el) {
    if (playStage === "moving") {
      movingStage(el, setPreviousActive, points, cows, setCows, activateCows, dispatch);
    }

    if (points[el].isOccupied) {
      gunShot(
        el,
        points,
        position,
        shot,
        blackShoots,
        redShoots,
        dropBlackCow,
        dropRedCow,
        dispatch,
        cows,
        setCows
      );
      return null;
    }


    if (previousActive) {
      if (isActive === points[previousActive].occupiedBy) {
        cows[isActive].redOrBlack === "#4c2b2b"
          ? dispatch(dropBlackCow(previousActive))
          : dispatch(dropRedCow(previousActive));
        changeArrayState(false, previousActive, points, position, isActive);
      }
    }

    if (points[el].isOccupied || isActive === false) {
      return null;
    } else {
      changeArrayState(true, el, points, position, isActive);
      placeCow(el, points, cows, setCows, isActive);

      if (cows[isActive].redOrBlack === "#4c2b2b") {
        dispatch(activatePlayer("red"));
        dispatch(togglePlayingBlackCows(el));
      } else {
        dispatch(activatePlayer("#4c2b2b"));
        dispatch(togglePlayingRedCows(el));
      }
      setPreviousActive(el);

      const actives = document.querySelectorAll(".active");
      actives.forEach((el) => {
        el.classList.contains("active") && el.remove();
      });
    }
  }

  return (
    <>
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
            data-testid="positions"
          />
        );
      })}
    </>
  );
}

export default Positions;
