import React from "react";
import { Form } from "react-bootstrap";

function Settings({ navItem }) {
  const dynamicItemStyle =
    navItem === "settings" ? { display: "block" } : { display: "none" };

  return (
    <Form style={dynamicItemStyle}>
      <Form.Switch id="custom-switch" label="Music" />
      <Form.Check type="switch" label="Sound Effects" />
      <Form.Check type="switch" label="Dark Mode" />
    </Form>
  );
}

export default Settings;
