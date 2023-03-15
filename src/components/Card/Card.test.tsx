import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("renders children correctly", () => {
    render(<Card>Hello World</Card>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
