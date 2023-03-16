import React from "react";
import Style from "./Input.module.scss";

interface InputProps {
  label?: string;
  handleInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({ label, handleInputChange, value }) => {
  return (
    <div className={Style["input-container"]}>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id={label}
        value={value}
        placeholder={label}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
