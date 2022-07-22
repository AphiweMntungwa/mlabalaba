import React from "react";
import '../css/bottom.scss'

function Bottom() {
  return (
    <>
      <path stroke="black" stroke-width=".6" d="m30 30 v80" />
      <path stroke="black" stroke-width=".6" d="m30 30 h80" />

      <path stroke="black" stroke-width=".6" d="m130 10 v120" />
      <path stroke="black" stroke-width=".6" d="m30 110 h80" />

      <path stroke="black" stroke-width=".6" d="m50 50 v40" />
      <path stroke="black" stroke-width=".6" d="m50 50 h40" />

      <path stroke="black" stroke-width=".6" d="m90 50 v40" />
      <path stroke="black" stroke-width=".6" d="m50 90 h40" />

      <path stroke="black" stroke-width=".6" className="vert" d="m140 10 v40" />
      <path stroke="black" stroke-width=".8" className="vert-2" d="m10 140 h40" />

      <path stroke="black" stroke-width=".6" className="vert-3" d="m0 10 v40" />
      <path stroke="black" stroke-width=".8" className="vert-3" d="m0 90 v40" />
    </>
  );
}

export default Bottom;
