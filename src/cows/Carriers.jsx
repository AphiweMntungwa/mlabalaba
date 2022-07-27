import React, { useState } from "react";
import Barn from "./Barn";
import { redCows, blackCows } from "../Utils/circles/Cows";

export function RedCarriers() {
  const [reds, setReds] = useState(redCows);

  return (
    <div>
      Red Cows
      <Barn cowState={reds} />
    </div>
  );
}

export function BlackCarriers() {
  const [blacks, setBlacks] = useState(blackCows);

  return (
    <div>
      Black Cows
      <Barn cowState={blacks} />
    </div>
  );
}
