import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "boxicons";
import "../../css/navbar.scss";

function Navbar() {
  return (
    <nav title="navbar">
      <div>
        <box-icon name="home"></box-icon> <span>Home</span>
      </div>
      <div>
        <box-icon type="solid" name="book-content"></box-icon>
        <span>Rules</span>
      </div>
      <div>
        <box-icon type="solid" name="color"></box-icon>
        <span>IsiZulu</span>
      </div>
      <div>
        <box-icon type="logo" name="wikipedia"></box-icon>
        <span>SeSotho</span>
      </div>
      <div>
        <box-icon type="solid" name="joystick-alt"></box-icon>
        <span>Settings</span>
      </div>
    </nav>
  );
}

export default Navbar;
