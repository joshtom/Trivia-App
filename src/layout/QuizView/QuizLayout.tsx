import React, { FC } from "react";
import Style from "./QuizLayout.module.scss";
import { QuizViewProps } from "../../utils/interface";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const QuizLayout: FC<QuizViewProps> = ({
  children,
  username,
  handleInstruction,
  loading,
}) => {
  return (
    <div className={Style["quizview"]}>
      <main className={Style["quizview__main"]}>{children}</main>
      <footer className={Style["quizview__footer"]}>
        <p>
          Welcome, {username}. <Link to="/">Go Back</Link>
        </p>
        <Button onClick={handleInstruction} disabled={loading}>
          Instruction
        </Button>
      </footer>
    </div>
  );
};

export default QuizLayout;
