import React, { useState } from "react";
import "../css/barn.scss";
import { activateCows } from "../Redux/activeCow";
import { useSelector, useDispatch } from "react-redux";

function Barn({ cowState }) {
  const activePlayer = useSelector((state) => state.activePlayer.activePlayer);
  const shots = useSelector(state => state.guns)
  const dispatch = useDispatch();
  console.log(shots)

  function activateCow(e, el) {
    console.log(cowState[el].redOrBlack, activePlayer)
    if (cowState[el].redOrBlack != activePlayer) {
      return null;
    }
    const actives = document.querySelectorAll(".active");
    actives.forEach((el) => {
      el.classList.contains("active") && el.classList.remove("active");
    });
    e.target.classList.add("active");
    dispatch(activateCows(el));
  }

  return (
    <div className="cows">
      {Object.keys(cowState).map((el) => (
        <div
          key={el}
          style={{
            backgroundColor: cowState[el].redOrBlack,
          }}
          onClick={(e) => activateCow(e, el)}
        ></div>
      ))}
    </div>
  );
}

export default Barn;
