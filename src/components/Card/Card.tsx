import { FC } from "react";
import Style from "./Card.module.scss";

const Card: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={Style["card"]}>{children}</div>;
};

export default Card;
