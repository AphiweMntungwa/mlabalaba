import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import Middle from "./Middle";
import "../css/top.scss";

function Top() {
  const [press, switcher] = useState(false);
  const burger = useSelector((state) => state.menu.menu.payload);

  useEffect(() => {
    burger ? switcher("top-nav-on") : switcher("top-nav-off");
  }, [burger]);

  return (
    <div className={`${press} top`}>
      <svg viewBox="0 0 140 140" className="board">
        <Middle />
      </svg>
    </div>
  );
}

export default Top;
