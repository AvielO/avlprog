import { createBrowserRouter } from "react-router";
import App from "../App";
import SignupPage from "../Pages/SignupPage/SignupPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <div className="text-32xl">App Container</div>,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
