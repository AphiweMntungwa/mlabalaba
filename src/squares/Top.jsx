import React, { useState, useEffect } from "react";
import Middle from "./Middle";
import "../css/top.scss";

export function spitPathBounds(m, val, v, h) {
  if (h) {
    return `m${m} ${val} h${h}`;
  } else if (!h && v) {
    return `m${m} ${val} v${v}`;
  } else {
    return null;
  }
}

export function makeNum(numCount) {
  let arr = [];
  for (let i = 10; i <= numCount; i += 10) {
    arr.push(i);
  }
  return arr;
}

function Top() {
  const [arr, pushArr] = useState([]);

  useEffect(() => {
    pushArr(makeNum(140));
  }, []);

  return (
    <div className="top">
      <svg viewBox="0 0 140 140" style={{ border: "1px solid green" }}>
        {arr.map((el, i) => (
          <>
            <path
              stroke="black"
              strokeWidth=".1"
              d={spitPathBounds(el, 0, 140)}
              className={`V${i}`}
            />
            <path
              stroke="black"
              strokeWidth=".1"
              d={spitPathBounds(0, el, true, 140)}
              className={`H${i}`}
            />
          </>
        ))}
        <Middle  />
      </svg>
    </div>
  );
}

export default Top;
