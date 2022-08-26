import React from "react";
import { useSelector } from "react-redux";
import "../../css/stages.scss";

function Stages({ showValue }) {
  const text = useSelector((state) => state.infobar.text);

  return (
    <div className="stages">
      <marquee behavior="scroll" direction="left" loop="">
        {text}
      </marquee>
    </div>
  );
}

export default Stages;
