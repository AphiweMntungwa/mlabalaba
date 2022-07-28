import React, { useState } from "react";
import Barn from "./Barn";
import { redCows, blackCows } from "../Utils/circles/Cows";

export function RedCarriers() {
  const [reds, setReds] = useState(redCows);

  return (
    <div className="carrier-group">
      Red Cows
      <Barn cowState={reds} />
    </div>
  );
}

export function BlackCarriers() {
  const [blacks, setBlacks] = useState(blackCows);

  return (
    <div className="carrier-group">
      Black Cows
      <Barn cowState={blacks} />
    </div>
  );
}
