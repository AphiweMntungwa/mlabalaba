import React from "react";
import { Form } from "react-bootstrap";
import Switch, { switchOn } from "./Switch";
import "../../css/settings.scss";

function Settings({ navItem }) {
  const dynamicItemStyle =
    navItem === "settings" ? { display: "block" } : { display: "none" };

  const handleMusic = (e) => {
    console.log(e.target.value);
  };

  return (
    <Form style={dynamicItemStyle} className="settings">
      <section>
        <Form.Label>Music</Form.Label>
        <Form.Range onChange={handleMusic} />
      </section>
      <section onClick={() => switchOn("Sound Effects")}>
        <span>Sound Effects</span>
        <Switch name="Sound Effects" id="Effects" />
      </section>
      <section onClick={() => switchOn("Dark Mode")}>
        <span>Dark Mode</span>
        <Switch name="Dark Mode" id="Dark Mode" />
      </section>
    </Form>
  );
}

export default Settings;
