import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../Redux/menu";

function MenuIcon() {
  const [press, switcher] = useState(false);
  const burger = useSelector((state) => state.menu.menu.payload);
  const dispatch = useDispatch();

  useEffect(() => {
    burger ? switcher("onSwitch") : switcher("offSwitch");
  }, [burger]);

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${press} menu-icon`}
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => dispatch(toggleMenu(!burger))}
    >
      <path stroke="black" strokeWidth=".8" d="m10 30 h70" />
      <path stroke="black" strokeWidth=".8" d="m10 50 h70" />
      <path stroke="black" strokeWidth=".8" d="m10 70 h70" />
      
      <path stroke="black" strokeWidth=".8" d="m70 10 v70" className="cross-hairs" />
      <path stroke="black" strokeWidth=".8" d="m30 10 v70" className="cross-hairs" />
      <path stroke="black" strokeWidth=".8" d="m50 10 v70" className="cross-hairs" />
    </svg>
  );
}

export default MenuIcon;
