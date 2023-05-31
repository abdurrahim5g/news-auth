import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Category from "../Pages/Category/Category";
import Protected from "./Protected";
import Login from "../components/Login/Login";
import SignUp from "../components/SIgnUp/SignUp";
import TramsAndConditions from "../components/TramsAndConditions/TramsAndCondetion";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) => {
          return fetch(
            `https://news-auth-server-f-rahim.vercel.app/categories/${params.id}`
          );
        },
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) => {
          return fetch(
            `https://news-auth-server-f-rahim.vercel.app/news/${params.id}`
          );
        },
        element: (
          <Protected>
            <News></News>
          </Protected>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/trams-and-conditions",
        element: <TramsAndConditions></TramsAndConditions>,
      },
    ],
  },
]);

export default router;
