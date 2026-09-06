import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/admin",
    element: <Blog></Blog>,
  },
]);
