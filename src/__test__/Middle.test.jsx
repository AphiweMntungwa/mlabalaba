import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("Middle test", () => {
  render(<App/>)
  it("should place a cow", () => {
    const blackCows = screen.getAllByTestId("blackcows");
    const positions = screen.getAllByTestId("positions");
    const blc = blackCows[0]
    const rdc = positions[0]
    fireEvent.click(blc);
    fireEvent.click(rdc);
    expect(blc).not.toBeInTheDocument();
  });
});
