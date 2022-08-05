import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { act } from "react-dom/test-utils";

describe("it should toggle the navbar with the menu icon", () => {
  it("should hide nav by default", () => {
    act(() => {
      render(<App />);
    });
    const app = screen.getByTitle("application");
    expect(app).toHaveClass("nav-off");
  });
  it("should show navbar", () => {
    act(() => {
      render(<App />);
    });
    const menu = screen.getByTestId("menu");
    const app = screen.getByTitle("application");
    fireEvent.click(menu);
    expect(app).toHaveClass("nav-on");
  });
});
