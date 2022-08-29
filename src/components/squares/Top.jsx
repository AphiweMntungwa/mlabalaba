import React, { useState, useEffect, Fragment } from "react";
import Path from "./Path";
import "../../css/top.scss";
import { useSelector } from "react-redux";

function Top({ switcher, setDark }) {
  const burger = useSelector((state) => state.menu.menu.payload);
  const darkTheme = useSelector((state) => state.theme.darkMode);
  useEffect(() => {
    darkTheme ? setDark("dark") : setDark("");
  }, [darkTheme]);

  useEffect(() => {
    burger ? switcher("nav-on") : switcher("nav-off");
  }, [burger]);

  return (
    <div className="top">
      <svg viewBox="0 0 140 140" className="board">
        <Path />
      </svg>
    </div>
  );
}

export default Top;
