import { createBrowserRouter } from "react-router";
import HomePage from "./components/HomePage";
import Test from "./components/test";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "/home-page",
    element: <HomePage />,
  },
]);
