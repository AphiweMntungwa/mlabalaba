import React from "react";
import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";

function CustomTooltip({ children, html, pst, trg }) {
  return (
    <Tooltip
      html={html}
      title="Confirm"
      position={pst}
      trigger={trg}
      interactive={true}
      animation="scale"
      arrow
      style={{
        border: "none",
        boxShadow: 'none'
      }}
    >
      {children}
    </Tooltip>
  );
}

export default CustomTooltip;
