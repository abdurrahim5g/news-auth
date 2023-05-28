import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

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
        path: "/category",
        element: <h2>This is category</h2>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/news/${params.id}`);
        },
        element: <News></News>,
      },
    ],
  },
]);

export default router;
