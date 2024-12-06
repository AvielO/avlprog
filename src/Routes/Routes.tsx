import { createBrowserRouter } from "react-router";
import App from "../App";
import SignupPage from "../Pages/SignupPage/SignupPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import SigninPage from "../Pages/SigninPage/SigninPage";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
    children: [
      
    ],
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
