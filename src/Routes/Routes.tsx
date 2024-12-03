import { createBrowserRouter } from "react-router";
import App from "../App";
import SignupPage from "../Pages/SignupPage/SignupPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <div>App Container</div>,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);
