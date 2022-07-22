import React, {useState, useEffect} from "react";
import Bottom from "./Bottom";
import { makeNum, spitPathBounds } from "./Top";

function Middle() {

  const [arr, pushArr] = useState([]);

  useEffect(() => {
    pushArr(makeNum(30));
  }, []);



  return (
    <>
      <path stroke="black" stroke-width=".6" d="m70 10 v120" />
      <path stroke="black" stroke-width=".6" d="m10 70 h120" />

      {arr.map((el, i) => <circle cx={el} cy={el} r="5"/>)}

      <path stroke="black" stroke-width=".6" d="m10 10 v120" />
      <path stroke="black" stroke-width=".6" d="m10 10 h120" />

      <path stroke="black" stroke-width=".6" d="m110 30 v80" />
      <path stroke="black" stroke-width=".6" d="m10 130 h120" />
      <Bottom />
    </>
  );
}

export default Middle;
