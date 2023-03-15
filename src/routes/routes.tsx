import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

export default routes;