import React, { useState, useEffect } from "react";
import Rules from "../Nav Options/Rules";
import Settings from "../Nav Options/Settings";
import "boxicons";
import "../../css/navbar.scss";

function Navbar() {
  const [navItem, setNavItem] = useState("rules");

  return (
    <div className="nav-wrapper">
      <nav title="navbar">
        <div onClick={() => setNavItem("rules")}>
          <box-icon type="solid" name="book-content"></box-icon>
          <span>Rules</span>
        </div>
        <div onClick={() => setNavItem("settings")}>
          <box-icon type="solid" name="joystick-alt"></box-icon>
          <span>Settings</span>
        </div>
      </nav>
      <Rules navItem={navItem} />
      <Settings navItem={navItem} />
    </div>
  );
}

export default Navbar;
