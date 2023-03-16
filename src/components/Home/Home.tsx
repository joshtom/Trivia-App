import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Card from "../Card/Card";
import Style from "./Home.module.scss";
import Button from "../Button/Button";
import OnboardingLayout from "../../layout/Onboarding/OnboardingLayout";
import Select from "../Select/Select";
import {
  IcategoryResponseData,
  Option,
  QuizDifficulty,
  QuizNumber,
} from "../../utils/interface";
import useFetch from "../../hooks/useFetch";

const difficulty: QuizDifficulty[] = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const quizno: QuizNumber[] = [
  { value: "1", label: "One" },
  { value: "2", label: "Two" },
  { value: "3", label: "Three" },
  { value: "4", label: "Four" },
  { value: "5", label: "Five" },
  { value: "6", label: "Six" },
  { value: "7", label: "Seven" },
  { value: "8", label: "Eight" },
  { value: "9", label: "Nine" },
  { value: "10", label: "Ten" },
];

const Home = () => {
  const [state, setState] = useState({
    difficulty: "",
    category: "",
    username: "",
    quizno: "",
  });

  const navigate = useNavigate();

  // Fetch Quiz Categories
  const { data, loading } =
    useFetch<IcategoryResponseData>("/api_category.php");

  const getCategories = data?.trivia_categories?.map((category) => {
    return { value: String(category.id), label: category.name };
  });

  const isFormValid = () => {
    return (
      state.username.length > 0 &&
      state.category.length > 0 &&
      state.difficulty.length > 0 &&
      state.quizno.length > 0
    );
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state);

    try {
      if (!isFormValid()) {
        throw new Error("Error in the form");
      } else {
        navigate(
          `/quiz?username=${state.username}&category=${state.category}&difficulty=${state.difficulty}&quizno=${state.quizno}`
        );
      }
    } catch (error) {
      console.log("An error occurred", error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <OnboardingLayout>
      <div className={Style["container"]}>
        <h1>Trivia App!</h1>
        <form onSubmit={handleOnSubmit}>
          <Card>
            <div className={Style["container__formWrapper"]}>
              <Input
                label="Nickname"
                value={state.username}
                handleInputChange={(e) => {
                  setState({ ...state, username: e.target.value });
                }}
              />

              <section>
                <Select
                  id="difficulty"
                  options={difficulty}
                  value={state.difficulty}
                  label="Difficulty Level"
                  handleSelectChange={(e) => {
                    setState({ ...state, difficulty: e.target.value });
                  }}
                />
              </section>

              <section>
                <Select
                  id="quizno"
                  options={quizno}
                  value={state.quizno}
                  label="No of Questions"
                  handleSelectChange={(e) => {
                    setState({ ...state, quizno: e.target.value });
                  }}
                />
              </section>

              <section>
                <Select
                  id="categories"
                  options={getCategories as Option[]}
                  value={state.category}
                  label="Category"
                  handleSelectChange={(e) =>
                    setState({ ...state, category: e.target.value })
                  }
                />
              </section>
            </div>

            <div className={Style["container__button"]}>
              <Button onClick={() => {}} disabled={!isFormValid()}>
                {!isFormValid() ? "Enter" : "Ok, go!"}
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </OnboardingLayout>
  );
};

export default Home;
