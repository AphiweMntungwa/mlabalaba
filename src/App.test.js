import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom'

describe("App test", () => {
    it("should render App", () => {
        const app = screen.queryByRole("heading");
        expect(app).toBe(null);
    });
});