import { useState } from "react";
import Style from "./QuestionsList.module.scss";
import Button from "../Button/Button";

type Answer = {
  answer: string;
  isCorrect: boolean;
};

export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type QuestionWithAnswers = Question & {
  answers: Answer[];
};

type Props = {
  questions: Question[];
};

const formatQuestion = (question: Question): QuestionWithAnswers => {
  const answers = [
    ...question?.incorrect_answers,
    question?.correct_answer,
  ].map((answer) => ({
    answer,
    isCorrect: answer === question?.correct_answer,
  }));
  return { ...question, answers };
};

const QuestionsList = ({ questions }: Props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );

  const totalQuestions = questions.length;
  const totalAnswered = answers.length;

  const currentQuestion = formatQuestion(questions[currentQuestionIndex]);

  const handleAnswerSelected = (
    selectedAnswer: Answer,
    answerIndex: number
  ) => {
    setSelectedAnswer(selectedAnswer);
    setSelectedAnswerIndex(answerIndex);
  };

  const handleQuizRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setSelectedAnswerIndex(null);
    setShowScore(false);
  };

  const handleQuizFinish = () => setShowScore(true);

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      setAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
      setSelectedAnswer(null);
      setSelectedAnswerIndex(null);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex - 1 >= 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const score = answers.filter((answer) => answer.isCorrect).length;

  return (
    <div className={Style["questionList"]}>
      {!showScore && (
        <>
          <h2 className={Style["questionList--heading"]}>
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </h2>
          <h3 className={Style["questionList--question"]}>
            {currentQuestion.question}
          </h3>
          <div className={Style["questionList--answers"]}>
            {currentQuestion?.answers?.map((answer, index) => (
              <label
                key={index}
                className={
                  selectedAnswerIndex === index ? Style["selected"] : ""
                }
              >
                <input
                  type="radio"
                  name={`answer`}
                  value={answer.answer}
                  checked={answer === selectedAnswer}
                  onChange={() => handleAnswerSelected(answer, index)}
                />
                {answer.answer}
              </label>
            ))}
          </div>

          <footer className={Style["questionList--footer"]}>
            <Button onClick={handlePreviousQuestion}>Previous</Button>
            <Button
              onClick={
                totalAnswered < totalQuestions
                  ? handleNextQuestion
                  : handleQuizFinish
              }
            >
              {totalAnswered < totalQuestions ? "Next" : "Finish"}
            </Button>
            <Button
              onClick={handleQuizRestart}
              style={{ backgroundColor: "black" }}
            >
              Restart
            </Button>
          </footer>
        </>
      )}
      {showScore && (
        <div className={Style["showScoreList"]}>
          <h2>
            You scored {score} out of {totalQuestions}!
          </h2>
          <Button onClick={handleQuizRestart}>Restart</Button>
        </div>
      )}
    </div>
  );
};

export default QuestionsList;
