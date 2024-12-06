import { createBrowserRouter } from "react-router";
import App from "../App";
import SignupPage from "../Pages/SignupPage/SignupPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import SigninPage from "../Pages/SigninPage/SigninPage";
import DashboardPage from "../Pages/DashboardPage/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
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
