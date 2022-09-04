import React from "react";
import { useSelector } from "react-redux";
import MovingText from "react-moving-text";
import "../../css/stages.scss";

function Stages({ showValue }) {
  const text = useSelector((state) => state.infobar.text);

  return (
    <div className="stages">
      <MovingText
        type="animation_type"
        duration="1000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="infinite"
        fillMode="none"
      >
        {text}
      </MovingText>
    </div>
  );
}

export default Stages;
