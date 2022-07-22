import React, { useState, useEffect } from "react";
import Middle from "./Middle";
import "./css/top.scss";

function spitBound(m, val, v, h) {
  if (h) {
    return `m${m} ${val} h${h}`;
  } else if (!h && v) {
    return `m${m} ${val} v${v}`;
  } else {
    return null;
  }
}

function makeNum() {
  let arr = [];
  for (let i = 0; i <= 100; i += 10) {
    arr.push(i);
  }
  return arr;
}

function Top() {
  const [arr, pushArr] = useState([]);

  useEffect(() => {
    pushArr(makeNum());
  }, []);

  return (
    <div className="top">
      <svg viewBox="0 0 100 100" style={{ border: "1px solid green" }}>
        {arr.map((el, i) => (
          <>
            <path
              stroke="black"
              strokeWidth=".1"
              d={spitBound(el, 0, 110)}
              className={`V${i}`}
            />
            <path
              stroke="black"
              strokeWidth=".1"
              d={spitBound(0, el, true, 100)}
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
