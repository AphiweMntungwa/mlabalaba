import React, { useState } from "react";
import "../css/barn.scss";
import { activateCows } from "../Redux/activeCow";
import { useSelector, useDispatch } from "react-redux";

function Barn({ cowState }) {
  const [activeCow, setActiveCow] = useState(false);
  const dispatch = useDispatch()

  function activateCow(e, el) {
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
