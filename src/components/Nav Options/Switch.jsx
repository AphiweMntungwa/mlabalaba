import React from "react";
import "../../css/switch.scss";

export const switchOn = (name) => {
  const wrapper = document.getElementsByClassName(name)[0];
  if (wrapper.classList.contains("On")) wrapper.classList.remove("On");
  else wrapper.classList.add("On");
};

function Switch({ name }) {
  return (
    <div className={"wrapper " + name} name={name}>
      <div></div>
    </div>
  );
}

export default Switch;
