import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <h2>This is home</h2>,
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
