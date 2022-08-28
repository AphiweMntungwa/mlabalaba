import React from "react";
import CustomTooltip from "./CustomTooltip";
import RadioButton from "./RadioButton";
import "../../css/helperButtons.scss";
import { useDispatch } from "react-redux";
import { resetPlayingCows } from "../../Redux/playingCows";
import { activateCows } from "../../Redux/activeCow";
import { activatePlayer } from "../../Redux/activePlayer";
import { placingStage } from "../../Redux/playStages";
import { display } from "../../Redux/infobar";
import { reset } from "../../Redux/reset";
import { resetBarn } from "../../Redux/cows";
import { resetAllGuns } from "../../Redux/guns";

function HelperButtons() {
  const dispatch = useDispatch();

  const handleResets = () => {
    dispatch(reset(true));
    dispatch(resetPlayingCows());
    dispatch(activateCows(false));
    dispatch(activatePlayer("#4c2b2b"));
    dispatch(placingStage());
    dispatch(resetBarn());
    dispatch(resetAllGuns());
    dispatch(display("Black Plays First"));
  };

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
      <CustomTooltip
        html={
          <span
            style={{ cursor: "pointer", textDecoration: "wheat underline" }}
            onClick={handleResets}
          >
            Confirm
          </span>
        }
        trg="click"
        pst="top"
      >
        <button>
          Reset
          <img src="https://img.icons8.com/ios-glyphs/30/000000/recurring-appointment.png" />
        </button>
      </CustomTooltip>
    </div>
  );
}

export default HelperButtons;
