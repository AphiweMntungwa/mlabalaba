import React from "react";
import './css/bottom.scss'

function Bottom() {
  return (
    <>
      <path stroke="black" stroke-width=".6" d="m20 20 v60" />
      <path stroke="black" stroke-width=".6" d="m20 20 h60" />

      <path stroke="black" stroke-width=".6" d="m80 20 v60" />
      <path stroke="black" stroke-width=".6" d="m20 80 h60" />

      <path stroke="black" stroke-width=".6" className="vert" d="m100 0 v20" />
      <path stroke="black" stroke-width=".8" className="vert-2" d="m0 100 h20" />

      <path stroke="black" stroke-width=".6" className="vert-3" d="m0 0 v20" />
      <path stroke="black" stroke-width=".8" className="vert-3" d="m0 80 v20" />
    </>
  );
}

export default Bottom;
