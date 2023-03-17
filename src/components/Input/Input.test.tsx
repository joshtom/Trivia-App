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
        value="josh"
        handleInputChange={handleInputChange}
      />
    );
    const input = screen.getByPlaceholderText("Username") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "josh" } });
    expect(input.value).toBe("josh");
    expect(handleInputChange).toHaveBeenCalledTimes(0);
  });
});
