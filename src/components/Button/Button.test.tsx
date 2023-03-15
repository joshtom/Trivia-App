import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders children correctly", () => {
    render(<Button>Hello World</Button>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  it("calls onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
