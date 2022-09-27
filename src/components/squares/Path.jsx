import React, { useState, useEffect, useMemo, Fragment } from "react";
import Positions from "./Positions";
import { boardLabels } from "../../Utils/positions/boardLabels";
import { redCows, blackCows } from "../../Utils/circles/Cows";
import { useSelector, useDispatch } from "react-redux";
import { guns } from "../../Utils/positions/gunPositions";
import { redShoots, blackShoots, addGun, removeGun } from "../../Redux/guns";
import { paths } from "../../Utils/paths/paths";
import { display } from "../../Redux/infobar";
import useSound from "use-sound";
import shootGunEffect from "../../Assets/sfx/shootGunEffect.mp3";
import Intro from "../../Assets/sfx/Intro.mp3";
import playing from "../../Assets/sfx/playing.mp3";
import placeCow from "../../Assets/sfx/placeCow.mp3";
import moveCow from "../../Assets/sfx/moveCow.mp3";
import flyCow from "../../Assets/sfx/flyCow.mp3";
import gameOver from "../../Assets/sfx/gameOver.mp3";

function Path({ musicPlaying, setMusicPlaying }) {
  const [cows, setCows] = useState({ ...redCows(), ...blackCows() });
  const [shots, reload] = useState(guns());
  const [win, setWin] = useState(false);
  const [gunOccupied, setGunOccupied] = useState(false);
  const isActive = useSelector((state) => state.activeCow.activeCow);
  const playingCows = useSelector((state) => state.playingCows);
  const playStage = useSelector((state) => state.playStages.playStage);
  const resetGame = useSelector((state) => state.reset.reset);
  const soundEffects = useSelector((state) => state.sound.sound);
  const [play] = useSound(shootGunEffect, { volume: 0.2 });
  const musicVolume = useSelector((state) => state.sound.musicVolume);
  const onMusic = useSelector((state) => state.sound.onMusic);
  const [playIntro, { stop }] = useSound(Intro, { volume: musicVolume });
  const [playGameOver] = useSound(gameOver, { volume: 0.2 });
  const [playingSound, { stop: stopPlaying }] = useSound(playing, {
    volume: musicVolume,
  });
  const [playPlaceCow] = useSound(placeCow, { volume: 0.1 });
  const [playMoveCow] = useSound(moveCow, { volume: 0.4 });
  const [playFlyCow] = useSound(flyCow, { volume: 0.1 });
  const dispatch = useDispatch();

  useEffect(() => {
    if (resetGame) {
      setCows({ ...redCows(), ...blackCows() });
      reload(guns());
      setGunOccupied(false);
      setWin(false);
    }
  }, [resetGame]);

  useEffect(() => {
    if (!onMusic) {
      stop();
      stopPlaying();
    }
  }, [onMusic]);

  useEffect(() => {
    console.log(shots)
  }, [shots])
  

  useMemo(() => {
    if (musicPlaying) playIntro();
  }, [musicPlaying]);

  function afterPlacingCow() {
    //function that runs in the useEffect after a piece is placed
    let test =
      cows[isActive].redOrBlack === "#4c2b2b"
        ? "playingBlackCows"
        : "playingRedCows";

    for (let i in shots) {
      //for loop over the gun match possibilities
      let gunArr = shots[i].gunArr;
      if (playingCows[test][gunArr[0]]) {
        if (playingCows[test][gunArr[1]]) {
          if (playingCows[test][gunArr[2]]) {
            dispatch(addGun(i));
            let obj = {...shots}
            obj[i].deactivate()
            reload(obj)
            //const { [i]:element, ...rest } = shots;
            //reload(rest);
            soundEffects && play();
            dispatch(display("Gun shot!! Gun Shot!!!"));
            setGunOccupied(test);
            test === "playingBlackCows"
              ? dispatch(blackShoots())
              : dispatch(redShoots());
            break;
          }
        }
      } else {
        if (soundEffects) {
          if (playStage === "placing") playPlaceCow();
          else if (playStage === "moving") {
            if (Object.keys(playingCows[test]).length > 3) {
              playMoveCow();
            } else {
              playFlyCow();
            }
          }
        }
      }
    }
  }

  useEffect(() => {
    if (playStage === "moving" && playingCows.playedRounds > 2) {
      if (Object.keys(playingCows.playingBlackCows).length < 3) {
        setWin(true);
        dispatch(display("Game Over! Red Wins!!!@#$%"));
        soundEffects && playGameOver();
      } else if (Object.keys(playingCows.playingRedCows).length < 3) {
        setWin(true);
        dispatch(display("Game Over! Black Wins!!!@#$%"));
        soundEffects && playGameOver();
      }
    }

    if (isActive) {
      afterPlacingCow();
    }
    if (playingCows.playedRounds === 1) {
      stop();
      playingSound();
      dispatch(display(playStage));
    }
  }, [cows, playingCows]);

  useEffect(() => {
    playingCows.playedRounds > 1 && dispatch(display(playStage));
  }, [playStage]);

  return (
    <>
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
      {Object.keys(cows).map((el) => {
        return (
          <Fragment key={el}>
            <circle
              cx={cows[el].x}
              cy={cows[el].y}
              r={cows[el].radius}
              stroke={cows[el].stroke}
              className={el}
              style={{ fill: cows[el].redOrBlack }}
            />
            <text
              x={cows[el].x}
              y={cows[el].y}
              textAnchor="middle"
              style={{ fontSize: ".4em", fill: "white" }}
              dy=".3em"
            >
              {cows[el].place}
            </text>
          </Fragment>
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
      <Positions
        setCows={setCows}
        cows={cows}
        shots={shots}
        reload={reload}
        gunOccupied={gunOccupied}
        setGunOccupied={setGunOccupied}
        win={win}
        playGameOver={playGameOver}
      />
    </>
  );
}

export default Path;
