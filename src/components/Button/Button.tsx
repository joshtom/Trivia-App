import React, { FC } from "react";
import Styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={Styles["button"]}>
      {children}
    </button>
  );
};

export default Button;
