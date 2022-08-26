import React from "react";
import { activateCows } from "../../Redux/activeCow";
import { useSelector, useDispatch } from "react-redux";
import "../../css/barn.scss";

function Barn({ cowState }) {
  const activePlayer = useSelector((state) => state.activePlayer.activePlayer);
  const dispatch = useDispatch();

  function activateCow(e, el) {
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

  const testid = (el) =>
    cowState[el].redOrBlack === "red" ? "redcows" : "blackcows";

  return (
    <div className="cows">
      {Object.keys(cowState).map((el) => (
        <div
          key={el}
          style={{
            backgroundColor: cowState[el].redOrBlack,
          }}
          onClick={(e) => activateCow(e, el)}
          className={testid(el)}
          data-testid={testid(el)}
        ></div>
      ))}
    </div>
  );
}

export default Barn;
