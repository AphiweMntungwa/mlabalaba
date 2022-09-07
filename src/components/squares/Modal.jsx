import React, { useState, useEffect, useMemo } from "react";
import { ls } from "./functions";

function Modal() {
  const [openModal, toggleModal] = useState(false);
  const [myclass, keepClass] = useState("invisible");

  useMemo(() => {
    if (!ls("visited")) {
      setTimeout(() => {
        toggleModal(true);
      }, 2000);
    }
  }, [10]);

  useEffect(() => {
    if (!openModal) keepClass("invisible");
    else keepClass("");
  }, [openModal]);

  return (
    <div className={"modal " + myclass}>
      <h3>
        <span>Welcome</span>
        <box-icon
          name="x"
          onClick={() => {
            toggleModal(false);
            ls("visited", true);
          }}
        ></box-icon>
      </h3>
      <p>
        Morabaraba is an ancient board game. It is a traditional African game,
        but people all over the world play it.
        <br />
        <br />
        Herders developed morabaraba centuries ago. It probably developed from
        an ancient Egyptian game. That game was called mancala. A morabaraba
        board that is 800 years old was found in Mapungubwe, South Africa.
      </p>
    </div>
  );
}

export default Modal;
