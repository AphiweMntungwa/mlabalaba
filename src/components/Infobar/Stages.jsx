import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import "../../css/stages.scss";

let Num = 0;
function Stages() {
  const text = useSelector((state) => state.infobar.text);
  const [style, setStyle] = useState({});

  useMemo(() => {
    setInterval(() => {
      Num += 5;
      setStyle({ left: `${Num}%` });
      if (Num >= 100) Num = -50;
    }, 200);
  }, []);

  return (
    <div className="stages">
      <div className="infobar" style={style}>
        {text}
      </div>
    </div>
  );
}

export default Stages;
