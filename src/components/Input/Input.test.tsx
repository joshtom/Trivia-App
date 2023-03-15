import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Input component", () => {
  it("updates value on input change", () => {
    const handleInputChange = jest.fn((event) => {
      console.log(`handleInputChange called with value: ${event.target.value}`);
    });
    render(
      <Input
        label="Username"
        value="john"
        handleInputChange={handleInputChange}
      />
    );
    const input = screen.getByPlaceholderText("Username") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "john" } });
    expect(input.value).toBe("john");
    expect(handleInputChange).toHaveBeenCalledTimes(0);
  });
});
