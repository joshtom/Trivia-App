import React, { useEffect, useState } from "react";
import QuizLayout from "../../layout/QuizView/QuizLayout";
import { useLocation } from "react-router-dom";
import axios from "axios";
// import useFetch from "../../hooks/useFetch";
// import { IquestionResponseData } from "../../utils/interface";
// import { get_question } from "../../helpers/api";
import QuestionsList from "../QuestionsList/QuestionsList";

const Quiz = () => {
  const location = useLocation();
  const [username, setUsername] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get("username");
    const category = searchParams.get("category");
    const difficulty = searchParams.get("difficulty");
    const quizno = searchParams.get("quizno");
    setUsername(name);

    //   console.log(username, category, difficulty, quizno);

    /* I eventually use this instead of the useFetch hook because
     1 -  was having multiple renders
     2 - A hook cannot be called inside another hook
     3 - Because it renders immediately the app renders,
     It returns some default values while waiting for the data to be fetched and ends up calling multiple times which will cause redundancy in the application
     */

    async function fetchData() {
      try {
        if (username) {
          const res = await axios.get(
            `https://opentdb.com/api.php?amount=${quizno}&category=${category}&difficulty=${difficulty}`
          );
          if (res.data) {
            setLoading(false);
            setData(res.data.results);
          }
        }
      } catch (err: any) {
        console.log("An error occured", err);
      }
    }

    fetchData();
  }, [location.search, username]);

  //   const { data, loading } = useFetch<IquestionResponseData>(
  //     // get_question(Number(quizno), Number(category), String(difficulty))
  //     `/api.php?amount=${Number(quizno)}&category=${Number(
  //       category
  //     )}&difficulty=${String(difficulty)}`
  //   );

  if (loading) return <h1>Loading...</h1>;
  return (
    <QuizLayout
      username={username as string}
      handleInstruction={() => true}
      loading={loading}
    >
      {data && data.length ? (
        <QuestionsList questions={data} />
      ) : (
        <h1>No questions found, please try again with different options</h1>
      )}
    </QuizLayout>
  );
};

export default Quiz;
