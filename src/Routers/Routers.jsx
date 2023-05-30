import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Category from "../Pages/Category/Category";
import Protected from "./Protected";

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
          return fetch(`http://localhost:5000/categories/${params.id}`);
        },
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/news/${params.id}`);
        },
        element: (
          <Protected>
            <News></News>
          </Protected>
        ),
      },
    ],
  },
]);

export default router;
