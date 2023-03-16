import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home";
import Quizpage from "../pages/quiz";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/quiz",
    element: <Quizpage />,
  },
]);

export default routes;
