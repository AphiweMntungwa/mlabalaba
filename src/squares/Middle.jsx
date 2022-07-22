import React from "react";
import Bottom from "./Bottom";

function Middle() {
  return (
    <>
      <path stroke="black" stroke-width=".6" d="m50 0 v100" />
      <path stroke="black" stroke-width=".6" d="m0 50 h100" />

      <path stroke="black" stroke-width=".6" d="m10 10 v80" />
      <path stroke="black" stroke-width=".6" d="m10 10 h80" />

      <path stroke="black" stroke-width=".6" d="m90 10 v80" />
      <path stroke="black" stroke-width=".6" d="m10 90 h80" />
      <Bottom />
    </>
  );
}

export default Middle;
