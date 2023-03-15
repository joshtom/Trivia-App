import { render, screen } from "@testing-library/react";
import Quiz from "./Quiz";

describe("Home", () => {
  it("renders the heading", () => {
    render(<Quiz />);
    const headingElement = screen.getByText("Quiz Page here");
    expect(headingElement).toBeInTheDocument();
  });
});
