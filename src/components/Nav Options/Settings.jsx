import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import Switch, { switchOn } from "./Switch";
import "../../css/settings.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { darken, lighten } from "../../Redux/theme";
import {
  toggleOnSFX,
  toggleOffSFX,
  volume,
  toggleOffMusic,
  toggleOnMusic,
} from "../../Redux/sound";
import useSound from "use-sound";
import onSwitch from "../../Assets/sfx/onSwitch.mp3";
import offSwitch from "../../Assets/sfx/offSwitch.mp3";
import Intro from "../../Assets/sfx/Intro.mp3";

function Settings({ navItem, setMusicPlaying }) {
  const [darkMode, switchDarkMode] = useState(false);
  const [effects, switchEffects] = useState(true);
  const [musicVolume, setMusicVolume] = useState(true);
  const [playOn] = useSound(onSwitch, { volume: 0.2 });
  const [playOff] = useSound(offSwitch, { volume: 0.3 });
  const soundEffects = useSelector((state) => state.sound.sound);
  const volumeMusic = useSelector((state) => state.sound.musicVolume);
  const dispatch = useDispatch();
  const light = useRef(null);
  const dark = useRef(null);

  const dynamicItemStyle =
    navItem === "settings" ? { display: "block" } : { display: "none" };

  const handleMusic = (e) => {
    console.log(e.target.value)

    if (e.target.value == 0) {
      setMusicVolume(false);
      dispatch(toggleOffMusic());
      setMusicPlaying(false);
    } else {
      setMusicVolume(true);
      setMusicPlaying(true);
      dispatch(toggleOnMusic());
      dispatch(volume(e.target.value / 100));
    }
  };

  const handleSwitch = (name) => {
    if (name === "Dark Mode") {
      if (soundEffects) {
        if (darkMode) playOn();
        else playOff();
      }
      switchDarkMode((state) => !state);
    } else if (name === "Sound Effects") {
      switchEffects((state) => !state);
    }
    switchOn(name);
  };

  useEffect(() => {
    if (darkMode) {
      dispatch(darken());
    } else {
      dispatch(lighten());
    }
  }, [darkMode]);

  useEffect(() => {
    effects && switchOn("Sound Effects");
  }, []);

  useEffect(() => {
    if (effects) {
      dispatch(toggleOnSFX());
    } else {
      dispatch(toggleOffSFX());
    }
  }, [effects]);

  return (
    <Form style={dynamicItemStyle} className="settings">
      <section>
        {!musicVolume && <box-icon name="volume-mute"></box-icon>}
        {musicVolume && <box-icon name="volume-full"></box-icon>}
        <Form.Label>Music</Form.Label>
        <Form.Range onChange={handleMusic} defaultValue={volumeMusic*100} />
      </section>
      <section onClick={() => handleSwitch("Sound Effects")}>
        <box-icon type="solid" name="piano"></box-icon>
        <span>Sound Effects</span>
        <Switch name="Sound Effects" id="Effects" />
      </section>
      <section onClick={() => handleSwitch("Dark Mode")}>
        {!darkMode && <box-icon name="sun" type="solid" ref={light}></box-icon>}
        {darkMode && <box-icon type="solid" name="moon" ref={dark}></box-icon>}
        <span>Dark Mode</span>
        <Switch name="Dark Mode" id="Dark Mode" />
      </section>
    </Form>
  );
}

export default Settings;
