import React, { useState, useEffect } from "react";
import { positionObjects } from "../../Utils/positions/Positions";
import { useSelector, useDispatch } from "react-redux";
import { activateCows } from "../../Redux/activeCow";
import { redShoots, blackShoots } from "../../Redux/guns";
import { activatePlayer } from "../../Redux/activePlayer";
import { togglePlayingBlackCows, togglePlayingRedCows } from "../../Redux/playingCows";
import "../../css/bottom.scss";

function Positions({setCows, cows}) {
  const [points, position] = useState(positionObjects);
  const playingCows = useSelector((state) => state.playingCows);
  const shot = useSelector((state) => state.guns);
  const isActive = useSelector((state) => state.activeCow.activeCow);

  const dispatch = useDispatch();

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
