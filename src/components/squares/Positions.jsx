import React, { useState, useEffect } from "react";
import { positionObjects } from "../../Utils/positions/Positions";
import { useSelector, useDispatch } from "react-redux";
import { activateCows } from "../../Redux/activeCow";
import { redShoots, blackShoots, removeGun } from "../../Redux/guns";
import { activatePlayer } from "../../Redux/activePlayer";
import {
  togglePlayingBlackCows,
  togglePlayingRedCows,
  dropBlackCow,
  dropRedCow,
} from "../../Redux/playingCows";
import "../../css/bottom.scss";
import {
  gunShot,
  movingStage,
  changeArrayState,
  placeCow,
  fillGun,
  checkOccupied,
  checkFlying,
} from "./functions";
import { display } from "../../Redux/infobar";
import useSound from "use-sound";
import loadGunEffect from "../../Assets/sfx/loadGunEffect.mp3";
import { reset } from "../../Redux/reset";
import { removeBlackBarnCow, removeRedBarnCow } from "../../Redux/cows";

function Positions({
  setCows,
  cows,
  shots,
  reload,
  gunOccupied,
  setGunOccupied,
}) {
  const [points, position] = useState(positionObjects());
  const [flyingRed, setFlyingRed] = useState(false);
  const [flyingBlack, setFlyingBlack] = useState(false);
  const activePlayer = useSelector((state) => state.activePlayer.activePlayer);
  const [previousActive, setPreviousActive] = useState("");
  const playingCows = useSelector((state) => state.playingCows);
  const filledGuns = useSelector((state) => state.guns.filledGuns);
  const shot = useSelector((state) => state.guns);
  const isActive = useSelector((state) => state.activeCow.activeCow);
  const playStage = useSelector((state) => state.playStages.playStage);
  const resetGame = useSelector((state) => state.reset.reset);
  const soundEffects = useSelector((state) => state.sound.sound);
  const [play] = useSound(loadGunEffect, {volume: 0.2});
  const dispatch = useDispatch();

  useEffect(() => {
    if (resetGame) {
      position(positionObjects());
      setFlyingRed(false);
      setFlyingBlack(false);
      setPreviousActive("");
      dispatch(reset(false));
    }
  }, [resetGame]);

  useEffect(() => {
    if (filledGuns.length)
      fillGun(
        filledGuns,
        dispatch,
        points,
        removeGun,
        shots,
        reload,
        play,
        soundEffects
      );

    var cowType;
    if (playStage == "moving") {
      if (gunOccupied) {
        if (gunOccupied === "playingRedCows") cowType = "playingBlackCows";
        else if (gunOccupied === "playingBlackCows") cowType = "playingRedCows";
        console.log(playingCows[cowType]);
        checkOccupied(playingCows[cowType], points, cowType, dispatch);
        setGunOccupied(false);
        checkFlying(
          playingCows[cowType],
          cowType,
          setFlyingRed,
          setFlyingBlack,
          dispatch
        );
      }
    }
  }, [playingCows]);

  useEffect(() => {
    var cowType;
    if (isActive) {
      if (cows[isActive].redOrBlack === "#4c2b2b") cowType = "playingRedCows";
      else cowType = "playingBlackCows";
    }
    if (playStage === "moving" && isActive) {
      checkOccupied(playingCows[cowType], points, cowType, dispatch);
      checkFlying(
        playingCows[cowType],
        cowType,
        setFlyingRed,
        setFlyingBlack,
        dispatch
      );
    }
  }, [playingCows, points]);

  function handlePositionClick(e, el) {
    if (playStage === "moving") {
      movingStage(
        el,
        setPreviousActive,
        points,
        cows,
        activePlayer,
        activateCows,
        dispatch
      );
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

    if (playStage === "moving") {
      if (!points[previousActive].neighbors[el]) {
        if (cows[points[previousActive].occupiedBy].redOrBlack === "#4c2b2b") {
          if (!flyingBlack) {
            dispatch(display("NOT ALLOWED!!"));
            return null;
          }
        } else {
          if (!flyingRed) {
            dispatch(display("NOT ALLOWED!!"));
            return null;
          }
        }
      }
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
        dispatch(removeBlackBarnCow(isActive));
      } else {
        dispatch(activatePlayer("#4c2b2b"));
        dispatch(togglePlayingRedCows(el));
        dispatch(removeRedBarnCow(isActive));
      }
      setPreviousActive(el);
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
