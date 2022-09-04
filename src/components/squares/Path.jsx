import React, { useState, useEffect, useMemo } from "react";
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

function Path({ musicPlaying, setMusicPlaying }) {
  const [cows, setCows] = useState({ ...redCows(), ...blackCows() });
  const [shots, reload] = useState(guns());
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
  const [playingSound, { stop: stopPlaying }] = useSound(playing, {
    volume: musicVolume,
  });
  const [playPlaceCow] = useSound(placeCow, { volume: 0.3 });
  const [playMoveCow] = useSound(moveCow, { volume: 0.4 });
  const [playFlyCow] = useSound(flyCow, { volume: 0.3 });

  const dispatch = useDispatch();

  useEffect(() => {
    if (resetGame) {
      setCows({ ...redCows(), ...blackCows() });
      reload(guns());
      setGunOccupied(false);
    }
  }, [resetGame]);

  useEffect(() => {
    console.log(onMusic);
    if (!onMusic) {
      stop();
      stopPlaying();
    }
  }, [onMusic]);

  useMemo(() => {
    if (musicPlaying) playIntro();
  }, [musicPlaying]);

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
      <Positions
        setCows={setCows}
        cows={cows}
        shots={shots}
        reload={reload}
        gunOccupied={gunOccupied}
        setGunOccupied={setGunOccupied}
      />
    </>
  );
}

export default Path;
