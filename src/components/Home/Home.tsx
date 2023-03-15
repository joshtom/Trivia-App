import React from "react";
import Input from "../Input/Input";
import Card from "../Card/Card";
import Style from "./Home.module.scss";
import Button from "../Button/Button";

const Home = () => {
  const [value, setValue] = React.useState<string>("");
  const handleOnSubmit = () => {
    console.log("The value", value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={Style["container"]}>
      <div className={Style["container__topLeft"]}></div>
      <div className={Style["container__bottomRight"]}></div>
      <h1>Trivia App!</h1>
      <aside>
        <Card>
          <Input
            label="USERNAME"
            value={value}
            handleInputChange={handleInputChange}
          />
          <div className={Style["container__button"]}>
            <Button onClick={handleOnSubmit}>Enter</Button>
          </div>
        </Card>
      </aside>
    </div>
  );
};

export default Home;
