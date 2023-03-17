import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./Select";

describe("Select Component", () => {
  const options = [
    { value: "option-1", label: "Option 1" },
    { value: "option-2", label: "Option 2" },
    { value: "option-3", label: "Option 3" },
  ];

  const label = "Select an option";
  const handleSelectChange = jest.fn();
  const value = "option-2";

  it("calls the handleSelectChange function on change", () => {
    render(
      <Select
        id="select"
        options={options}
        label={label}
        handleSelectChange={handleSelectChange}
        value={value}
      />
    );

    const selectElement = screen.getByLabelText(label);
    fireEvent.change(selectElement, { target: { value: "option-2" } });

    expect(handleSelectChange).toHaveBeenCalled();
  });

  it("renders the options", () => {
    render(
      <Select id="select-id" label="Select an option" options={options} />
    );
    const selectElement = screen.getByLabelText("Select an option");

    options.forEach((option) => {
      expect(selectElement).toContainElement(screen.getByText(option.label));
    });
  });

  it("renders the label", () => {
    render(
      <Select id="select-id" label="Select an option" options={options} />
    );
    const selectElement = screen.getByLabelText("Select an option");
    expect(selectElement).toBeInTheDocument();
  });
});
