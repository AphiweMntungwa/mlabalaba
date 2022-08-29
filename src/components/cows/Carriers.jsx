import React, { useEffect, useState } from "react";
import Barn from "./Barn";
import { useSelector, useDispatch } from "react-redux";
import { redCows, blackCows } from "../../Utils/circles/Cows";
import { resetBarn } from "../../Redux/cows";
import { movingStage, placingStage } from "../../Redux/playStages";

export function RedCarriers() {
  const dispatch = useDispatch();
  const [localRed, setlocalRed] = useState(redCows());
  const reds = useSelector((state) => state.cows.reds);
  const resetGame = useSelector((state) => state.reset.reset);

  useEffect(() => {
    if (reds) {
      const mockObj = localRed;
      delete mockObj[reds];
      setlocalRed(mockObj);
      dispatch(resetBarn());
    }
    if (resetGame) {
      setlocalRed(redCows());
    }
    Object.keys(localRed).length === 0 && dispatch(movingStage());
  }, [reds, resetGame]);

  useEffect(() => {
    Object.keys(localRed).length !== 0 && dispatch(placingStage());
  }, [localRed]);

  return (
    <div className="carrier-group">
      Red Cows
      <Barn cowState={localRed} />
    </div>
  );
}

export function BlackCarriers() {
  const dispatch = useDispatch();
  const [localBlack, setlocalBlack] = useState(blackCows());
  const blacks = useSelector((state) => state.cows.blacks);
  const resetGame = useSelector((state) => state.reset.reset);

  useEffect(() => {
    if (blacks) {
      const mockObj = localBlack;
      delete mockObj[blacks];
      setlocalBlack(mockObj);
      dispatch(resetBarn());
    }
    if (resetGame) {
      setlocalBlack(blackCows());
    }
  }, [blacks, resetGame]);

  return (
    <div className="carrier-group">
      Black Cows
      <Barn cowState={localBlack} />
    </div>
  );
}
