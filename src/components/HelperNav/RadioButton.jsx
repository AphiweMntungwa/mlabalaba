import React from "react";
import { Form } from "react-bootstrap";
import "../../css/helperButtons.scss";

function RadioButton() {
  return (
    <Form>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Form.Check label="IsiZulu" name="version" type="radio" />
        <Form.Check label="SeSotho" name="version" type="radio" />
      </div>
    </Form>
  );
}

export default RadioButton;
