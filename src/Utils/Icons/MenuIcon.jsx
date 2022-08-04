import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../../Redux/menu";
import { Path } from "../paths/paths";

function MenuIcon() {
  const [press, switcher] = useState(false);
  const burger = useSelector((state) => state.menu.menu.payload);
  const dispatch = useDispatch();

  useEffect(() => {
    burger ? switcher("onSwitch") : switcher("offSwitch");
  }, [burger]);

  const paths = {
    0: new Path("10 30", "70"),
    1: new Path("10 50", "70"),
    2: new Path("10 70", "70"),
    3: new Path("70 10", false, "70", "cross-hairs"),
    4: new Path("30 10", false, "70", "cross-hairs"),
    5: new Path("50 10", false, "70", "cross-hairs"),
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${press} menu-icon`}
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => dispatch(toggleMenu(!burger))}
      data-testid="menu"
    >
      {Object.keys(paths).map((el) => {
        return (
          <path
            stroke="black"
            key={el}
            strokeWidth=".8"
            d={paths[el].getPath()}
            className={paths[el].class}
          />
        );
      })}
    </svg>
  );
}

export default MenuIcon;
