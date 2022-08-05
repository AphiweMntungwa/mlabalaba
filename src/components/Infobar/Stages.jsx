import React from "react";
import { useSelector } from "react-redux";
import "../../css/stages.scss";

function Stages() {
  const playStages = useSelector((state) => state.playStages.playStage);
  return <div className="stages">{playStages}</div>;
}

export default Stages;
