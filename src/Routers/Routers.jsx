import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";

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
        path: "/news",
        element: <h2>This is news</h2>,
      },
    ],
  },
]);

export default router;
