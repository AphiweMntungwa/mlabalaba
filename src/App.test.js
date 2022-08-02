import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom'

describe("App test", () => {
    it("should render App", () => {
        render( < App / > )
        const app = screen.getByTestId("application");
        expect(app).toBeInTheDocument();
    });
});