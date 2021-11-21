import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("Should display the correct header", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/My Header/i);
    expect(headingElement).toBeInTheDocument();
  });
});
