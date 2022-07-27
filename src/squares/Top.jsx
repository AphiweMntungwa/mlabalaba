import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Position from "../Utils/positions/Positions";
import Middle from "./Middle";
import "../css/top.scss";
import Cow from "../Utils/circles/Cows";

const a = new Cow(20, 30, 3, "blue", "black", true);
console.log(a);

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
  const [press, switcher] = useState(false);
  const burger = useSelector((state) => state.menu.menu.payload);

  useEffect(() => {
    burger ? switcher("top-nav-on") : switcher("top-nav-off");
  }, [burger]);

  useEffect(() => {
    pushArr(makeNum(140));
  }, []);

  return (
    <div className={`${press} top`}>
      <svg viewBox="0 0 140 140" className="board">
        {arr.map((el, i) => (
          <Fragment key={i}>
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
          </Fragment>
        ))}
        <Middle />
      </svg>
    </div>
  );
}

export default Top;
