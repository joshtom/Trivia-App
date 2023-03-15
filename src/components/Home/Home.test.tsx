import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("renders the heading", () => {
    render(<Home />);
    const headingElement = screen.getByText("Home Page here");
    expect(headingElement).toBeInTheDocument();
  });
});
