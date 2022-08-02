import { render, screen, fireEvent } from "@testing-library/react";
import Middle from "../squares/Middle";
import '@testing-library/jest-dom'

describe("Middle test", () => {
    it("should place a cow", () => {
        render( < Middle / > )
        const cow = screen.getAllByTestId('positions')
        fireEvent.click(cow)
        expect(cow).toBeInTheDocument();
    });
});