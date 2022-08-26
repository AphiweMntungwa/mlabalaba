import React from "react";
import CustomTooltip from "./CustomTooltip";
import RadioButton from "./RadioButton";
import "../../css/helperButtons.scss";

function HelperButtons() {
  return (
    <div className="helper-buttons">
      <CustomTooltip html={<RadioButton />} trg="mouseover" pst="bottom">
        <button>
          Versions
          <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-7.png" />{" "}
        </button>
      </CustomTooltip>
      <button>
        Save <img src="https://img.icons8.com/ios/50/000000/save--v1.png" />
      </button>
      <CustomTooltip html={<span>Confirm</span>} trg="click" pst="top">
        <button>
          Reset
          <img src="https://img.icons8.com/ios-glyphs/30/000000/recurring-appointment.png" />
        </button>
      </CustomTooltip>
    </div>
  );
}

export default HelperButtons;
