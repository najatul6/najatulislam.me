import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement:<ErrorPage/>,
      children: [
        { path: "/", element: <Home/> },
    ]}]);