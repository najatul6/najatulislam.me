import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement:<ErrorPage/>,
      children: [
        { path: "/", element: <Home/> },
        {
          path:"projects",
          element:<Projects/>
        }
    ]}]);