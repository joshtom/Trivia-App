import React, { FC, ReactNode } from "react";
import Style from "./OnboardingLayout.module.scss";

const OnboardingLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="onboarding">
      <div className={Style["onboarding__topLeft"]}></div>
      <div className={Style["onboarding__bottomRight"]}></div>
      {children}
    </div>
  );
};

export default OnboardingLayout;
