import React, { useState, useEffect } from "react";
import Rules from "../Nav Options/Rules";
import Settings from "../Nav Options/Settings";
import "boxicons";
import "../../css/navbar.scss";

function Navbar({setMusicPlaying}) {
  const [navItem, setNavItem] = useState("rules");
  const [style, setStyle] = useState({ rules: {}, settings: {} });

  useEffect(() => {
    if (navItem === "rules")
      setStyle({
        rules: {
          backgroundColor: "#f3f4ef",
          boxShadow: "0px 1px 8px #179f33",
          borderRadius: "4px",
        },
        settings: {},
      });
    if (navItem === "settings")
      setStyle({
        settings: {
          backgroundColor: "#f3f4ef",
          boxShadow: "0px 1px 8px #179f33",
          borderFadius: "4px",
        },
        rules: {},
      });
  }, [navItem]);

  return (
    <div className="nav-wrapper">
      <nav title="navbar">
        <div onClick={() => setNavItem("rules")} style={style.rules}>
          <box-icon type="solid" name="book-content"></box-icon>
          <span>Rules</span>
        </div>
        <div onClick={() => setNavItem("settings")} style={style.settings}>
          <box-icon type="solid" name="joystick-alt"></box-icon>
          <span>Settings</span>
        </div>
      </nav>
      <Rules navItem={navItem} />
      <Settings navItem={navItem} setMusicPlaying={setMusicPlaying} />
    </div>
  );
}

export default Navbar;
